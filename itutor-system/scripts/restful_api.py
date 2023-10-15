from scripts.utils_metadata import MetadataRetrieval
from scripts.utils_instruction_generation import assemble_instruction_generation_prompt, assemble_screen_question_answering_prompt, assemble_screen_summary_prompt, call_zhipu_api, classify_prompt
import json

def treeify_enrico_json(json_data):
    metadata = MetadataRetrieval(json_data, from_file=False)
    # print(metadata.export_json_string())
    return metadata.export_json_string()

def casify_and_call_response(json_data):
    if json_data["isTutorial"] == True:
        prompt = assemble_instruction_generation_prompt(json_data["specification"], json_data["command"])
        prompt_type = "tutorial"
    else:
        prompt_type = classify_prompt(json_data["command"])
        if prompt_type == "tutorial":
            prompt = assemble_instruction_generation_prompt(json_data["specification"], json_data["command"])
        elif prompt_type == "summary":
            prompt = assemble_screen_question_answering_prompt(json_data["specification"], json_data["command"])
        elif prompt_type == "inquiry":
            prompt = assemble_screen_question_answering_prompt(json_data["specification"], json_data["command"])
        else:
            return "Failed", "Failed"
    # print(prompt)
    llm_suggestion = call_zhipu_api(prompt)
    if prompt_type == "tutorial":
        # # check json format prompt
        # check_json_prompt = [
        # {"role": "user", "content": f"""\
        #  Check if the input is in JSON style. It should have attribute target and explanation.\
        #  Return the original code if it is, or refractor it to a valid json format. Return the code only, without any formatting.
        #  Input:
        #  {llm_suggestion}
        # """}
        # ]
        # llm_suggestion = call_zhipu_api(check_json_prompt)
        # print(llm_suggestion)
        # check the response, remove the code notation for md
        llm_suggestion = llm_suggestion.replace("```", "")
        # truncate everything before the first "{"
        llm_suggestion = llm_suggestion[llm_suggestion.find("{"):]
        # truncate everythin after the last "}"
        llm_suggestion = llm_suggestion[:llm_suggestion.rfind("}") + 1]
        # replace 
        # check if the llm_suggestion is a valid json
        try:
            _ = json.loads(llm_suggestion)
        except json.decoder.JSONDecodeError as e:
            return "Failed", llm_suggestion
            
    return prompt_type, llm_suggestion


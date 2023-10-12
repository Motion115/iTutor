def assemble_screen_question_answering_prompt(ui_spec, question):
    question_answering_prompt = [
    {"role": "user", "content": f"""\
     Given a mobile screen, the hierarchies presented in JSON, \
     and a user question, provide the answer based on the screen information.\

     Supress any anwser that explicitly talks about the JSON file. Instead, try to \
     answer in a natural tone. Note that you do not need to provide the details of the hierarchies. \
     Reply in less than 100 words.
     Screen:
     {ui_spec}
     Question:
     {question}
    """}
    ]
    return question_answering_prompt

def assemble_instruction_generation_prompt(ui_spec, question):
    instruction_to_action_prompt = [
    {"role": "user", "content": f"""\
     Your task is to act like a tutor, where you need to instruct a user how to \
     operate a given application and explain what this operation does. \
     The explanation should be around 50 words, and no longer than 100 words. \
     
     You will be provided with the following metadata for making your decision:\
     1. The UI components of the page. The components are derived from an Andriod UI specification,\
     and presented in JSON style. The key 'UI_type' denote the type of the component; \
     key 'semantics' provides the on-screen display of the UI component; 'name' \
     denotes the id of this component. This will be provided with triple backticks. \
     2. The command from the user will be provided after "User command".\

    Information starts here:
    ```
     {ui_spec}
    ```
    User command:
     {question}
     
    You should reply in a json format. You should provide 2 attributes:
     1. "target": the id of the component, which should be found in the name key in from the metadata.\
     Be sure the id is the leaf node in the provided JSON.
     2. "explanation": the explanation of the proposed operation.
    """}
    ]
    return instruction_to_action_prompt

def assemble_screen_summary_prompt(ui_spec):
    screen_summary_prompt = [
    {"role": "user", "content": f"""
        Given a screen, the hierarchies presented in JSON, and summarize its purpose.
        Note that you do not need to provide the details of the hierarchies. Reply in less than 50 words.
        Screen:
        {ui_spec}
    """}
    ]
    return screen_summary_prompt

import numpy as np
def cosine_similarity(a, b):
    a = np.asarray(a, dtype=np.float64)
    b = np.asarray(b, dtype=np.float64)
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))


import zhipuai
from scripts.utils.api_key import API_KEY
zhipuai.api_key = API_KEY

def classify_prompt(prompt):
    response = zhipuai.model_api.invoke(
    model="text_embedding",
    prompt=prompt
    )
    if "data" not in response:
        return "Failed"
    # print(response)
    response = np.array(response["data"]["embedding"])
    # load inquery, summary, tutorial vectors from .npy file
    inquery_base = np.load('./scripts/utils/inquery_vector.npy')
    summary_base = np.load('./scripts/utils/summary_vector.npy')
    # tutorial_base = np.load('./scripts/utils/tutorial_vector.npy')
    # calculate the similarity between prompt and three base vectors
    sim_dict = {
        "inquiry": cosine_similarity(inquery_base, response),
        "summary": cosine_similarity(summary_base, response),
        # "tutorial": cosine_similarity(tutorial_base, response)
    }
    # sort similarity
    sim_dict = {k: v for k, v in sorted(sim_dict.items(), key=lambda item: item[1], reverse=True)}
    # turn the key in sim_dict into a list
    sim_list = list(sim_dict.keys())
    return sim_list[0]

def call_zhipu_api(prompt):
    response = zhipuai.model_api.sse_invoke(
        model="chatglm_std",
        # prompt= instruction_to_action_prompt,
        prompt = prompt,
        temperature= 0.3,
        top_p= 0.8,
        incremental=True
    )

    response_from_llm = ""
    for event in response.events():
        if event.event == "add":
            response_from_llm += event.data
            # print(event.data, end="")
        elif event.event == "error" or event.event == "interrupted":
            response_from_llm += event.data
            print(event.data, end="")
        elif event.event == "finish":
            response_from_llm += event.data
            # print(event.data)
            # print(event.meta, end="")
        else:
            response_from_llm += event.data
            # print(event.data, end="")
    return response_from_llm
import zhipuai
import json

with open('./test.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
    data = str(data)

question = "How many XP does Helen have?"

question_answering_prompt = [
    {"role": "user", "content": f"""
     Given a mobile screen, the hierarchies presented in JSON, 
     and a user question, provide the answer based on the screen information.
     Screen:
     {data}
     Question:
     {question}
    """}
]

instruction_to_action_prompt = [
    {"role": "user", "content": f"""
     Your task is to act like a tutor, where you need to instruct a user how to 
     operate a given application and explain what this operation does. 
     The explanation should be around 50 words, and no longer than 100 words.
     
     You will be provided with the following metadata for making your decision:
     1. The UI components of the page. The components are derived from an Andriod UI specification,
     and presented in JSON style. The key 'UI_type' denote the type of the component; 
     key 'semantics' provides the on-screen display of the UI component; 'name' denotes 
     the id of this component. This will be
     provided with triple backticks.
     2. The command from the user will be provided in dollar sign.

     You should reply with JSON source code. You should provide 2 attributes:
     1. "target": the id of the component, which should be found in the name key in from the metadata.
     2. "explanation": the explanation of the proposed operation.

    Information starts here:
    ```
     {data}
    ```
    User command:
    $
    I want to watch political news.
    $
     
    """}
]

screen_summary_prompt = [
    {"role": "user", "content": f"""
        Given a screen, the hierarchies presented in JSON, and summarize its purpose.
        Note that you do not need to provide the details of the hierarchies. Reply in less than 50 words.
        Screen:
        {data}
    """}
]

from utils.api_key import API_KEY
zhipuai.api_key = API_KEY
response = zhipuai.model_api.sse_invoke(
    model="chatglm_std",
    # prompt= instruction_to_action_prompt,
    prompt = screen_summary_prompt,
    temperature= 0.3,
    top_p= 0.6,
    incremental=True
)

for event in response.events():
    if event.event == "add":
        print(event.data, end="")
    elif event.event == "error" or event.event == "interrupted":
        print(event.data, end="")
    elif event.event == "finish":
        print(event.data)
        print(event.meta, end="")
    else:
        print(event.data, end="")
# System

*Note: this system demo doesn't reflect the implementation of the iTutor paper iTutor: A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications for UIST 2023. Instead, this is a stripped-down version only to display the capability of LLMs in the tutorial generation, serving the purpose of showcasing the capability for the competition (C4-HCI 2023) project `老年人智能手机使用“引路人”`.*

## How to run the system demo

1. Go to the "system-demo" folder and install the project by `yarn` or `yarn install`.
2.  Go to the "scripts/utils" folder, create a file with the filename "api_key.py", create a variable `API_KEY`, and paste your [Zhipu API](https://open.bigmodel.cn/) key.
3. Download the selection of example UI screens from the Enrico dataset from [here](https://drive.google.com/file/d/1K-A8j4gWcRHyTOlW_2CYzL7mldIlXsub/view?usp=drive_link) and unzip it into the scripts folder. 
4. Run "app.py", which enables the Restful API call from the localhost.
5. Go back to the "system-demo" folder, and run `yarn start`. You are ready to go!

## How to play with the demo

1. Upload a JSON configuration file. You can find it in your downloaded data folder.
2. Open the corresponding UI image (to your JSON configuration) in the screenshots folder.
3. Input your question in the input bracket, and ask any question you like! Please note that you must open the tutorial mode with the switch button to force a JSON response from the model. Otherwise, the system will assume you are in the summary/inquiry mode, only providing you with the text response. Also, you will be given a hint of which mode the system is in from a Tag above the answer card.



**Additional information**: We apologize for the untidiness in the code. We will try and fix the problem with more development into the iTutor system. Besides, all your responses are generated with AI from a third-party service. We cannot ensure the quality and reliability of the generated content and do not expect to hold any responsibility for any results generated that might be inaccurate or biased. We assume no responsibility for any consequences arising from using this content.


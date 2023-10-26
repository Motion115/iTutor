import React from "react";
import { Typography, Layout } from "antd";
import ContentBlock from "./helper";
const { Paragraph } = Typography;
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  render() {
    const content = {
      english: {
        description_title: "Prompt for chatGPT",
        description: (
          <div>
            Our prompt consists of three parts:
            <li>
              we inform chatGPT to provide instructions for navigating through a
              given application
            </li>
            <li>
              we provide chatGPT with the three types of UI context with
              specific markings (!, $, and ```)
            </li>
            <li>
              we request chatGPT to respond in JSON including the original
              command, next-step instruction, UI element to operate on, and the
              explanation.
            </li>
            <br />
            <b>20 UI types:</b> bare, dialer, camera, chat, editor, form,
            gallery, list, login, maps, mediaplayer, menu, modal, news, other,
            profile, search, settings, terms, and tutorial.
            <br />
            <br />
            <b>UI component types:</b> Button, Input, Icon, Checkbox, Selector,
            Switch, Container, Tag, Menu. Refer to our github repository for
            detailed labling instructions.
            <br />
            <br />
            Copy the prompt on the right for chatGPT's user interface or use the
            API to get the response. Be sure to replace the contents inside the
            bracket.
          </div>
        ),
      },
      chinese: {
        description_title: "chatGPT的提示工程",
        description: (
          <div>
            我们针对chatGPT的提示词包含三个部分（目前提示仍为英文，已经在针对其它中文模型进行测试，包括文心一言和ChatGLM，但目前的问题是两个模型接受token长度受到限制）：
            <li>
              首先，向chatGPT说明任务是针对一个UI界面给出如何操作页面的提示；
            </li>
            <li>
              接着，将UI语义包装在特定提示词中 (!, $, 和
              ```)，告诉chatCPT本页面的UI语义；
            </li>
            <li>
              最后，我们要求chatGPT用JSON格式进行回复。回复内容包括当前指令，下一步指令，操作的UI元素，以及操作的解释。
            </li>
            <br />
            <b>20种UI类别:</b> bare, dialer, camera, chat, editor, form,
            gallery, list, login, maps, mediaplayer, menu, modal, news, other,
            profile, search, settings, terms, and tutorial.
            <br />
            <br />
            <b>UI组件类别:</b> Button, Input, Icon, Checkbox, Selector, Switch,
            Container, Tag, Menu. Refer to our github repository for detailed
            labling instructions.
            <br />
            <br />
            将右侧的提示词复制到chatGPT的用户界面，或者使用API获取回复。请替换提示符括号中的内容后使用。
          </div>
        ),
      },
    };

    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <ContentBlock
            title={content[this.props.language]["description_title"]}
            description={content[this.props.language]["description"]}
            media={
              <Paragraph style={{fontSize: "12px"}}>
                <pre>
                  Your task is to act like a tutor, where you need to instruct a
                  user how to operate a given application and explain what this
                  operation does. The explanation should be around 50 words, and
                  no longer than 100 words.
                  <br />
                  <br />
                  You will be provided with the following metadata for making
                  your decision:
                  <br />
                  1. The general purpose of the page is provided in between two
                  exclamation marks. the purpose is one of the following 20
                  classes: bare, dialer, camera, chat, editor, form, gallery,
                  list, login, maps, mediaplayer, menu, modal, news, other,
                  profile, search, settings, terms, and tutorial.
                  <br />
                  2. The UI components of the page are provided in JSON format
                  and rounded by the dollar sign. All the possible types of UI
                  components are Button, Input, Icon, Checkbox, Selector,
                  Switch, Container, Tag, Menu. Each of the types is a possible
                  attribute in the JSON.
                  <br />
                  3. The command from the user will be provided in triple
                  backticks.
                  <br />
                  <br />
                  You should reply with JSON source code. You should provide 4
                  attributes:
                  <br />
                  1. "Command": repeat the command of the user.
                  <br />
                  2. "Operation": a list, including the first next two steps of
                  operation.
                  <br />
                  3. "Key": a list. Index 0 is the attribute in the UI component
                  JSON, and index 1 should the annotation of the element.
                  <br />
                  4. "Explanation": the explanation of the proposed operation.
                  <br />
                  <br />
                  The metadata is as follows:
                  <br />
                  !(UI type)!
                  <br />
                  $(UI components)$
                  <br />
                  ```(Your command)```
                </pre>
              </Paragraph>
            }
          />
        </Content>
      </div>
    );
  }
}

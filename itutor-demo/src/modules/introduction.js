import React from "react";
import teaser_pic from "../assets/teaser-v6.png";
import { Typography } from "antd";
import { Layout, Image } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  render() {
    const CONTENT = {
      english: (
        <div>
          We present iTutor, a generative tutorial system for promoting
          smartphone use proficiency among elders. iTutor is unique because it
          can dynamically generate tutorials based on current operation goals
          and UI context, which we achieved through leveraging prompt
          engineering to large language models (LLMs). Our evaluations showed
          potential for this approach, as we yielded 78.6% accuracy in the
          instruction generation process.
        </div>
      ),
      chinese: (
        <div>
          iTutor是一种结合了大语言模型技术的教程生成系统，用于为老年人提供基于情景的手机使用教程和相关支持，
          以提高老年人使用手机的熟练程度。iTutor的动态教程生成能力是通过大模型实现的。大模型会基于当前的操作目标和UI状态
          给出操作建议。我们的实验中，在使用ChatGPT的大模型时，我们得到了78.6%的下一步操作准确率。
        </div>
      ),
    };

    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            Welcome to <b>iTutor</b>
          </Title>

          <Image
            src={teaser_pic}
            style={{
              width: "98%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
            preview={false}
          />

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}

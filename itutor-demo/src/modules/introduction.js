import React from "react";
import teaser_pic from "../assets/teaser-v3.jpg";
import { Typography } from "antd";
import { Layout, Image } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  constructor(props) {
    super(props);
  }

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
          instruction generation process. We conclude by providing the roadmap
          for further development.
        </div>
      ),
      chinese: (
        <div>
          iTutor是一种生成式教程生成系统，旨在提高老年人使用智能手机的熟练程度。
          iTutor结合了当前大模型的能力，可以根据当前的操作目标和UI上下文动态生成教程。
          我们的实验证明了这种实现方式的潜力。
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
              width: "80%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          />

          <Paragraph style={{ fontSize: "16px" }}>
            {CONTENT[this.props.language]}
          </Paragraph>
        </Content>
      </div>
    );
  }
}

import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button } from "antd";
import { Layout, Row } from "antd";
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const progressBarContent = [
  {
    title: "Select UI Image",
    description: "Select an UI page.",
  },
  {
    title: "Select Operation",
    description: "Select an operation.",
  },
  {
    title: "Prompt Generation",
    description: "Prompt the LLM.",
  },
  {
    title: "Instruction Feedback",
    description: "Returned JSON.",
  },
  {
    title: "Instruction Translation",
    description: "A multimodal tutorial.",
  },
];

export default class Demonstration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_progress: 0,
    };
  }

  prev = () => {
    if (this.state.current_progress >= 1) {
      const current_progress = this.state.current_progress - 1;
      this.setState({ current_progress: current_progress });
    }
  };

  forward = () => {
    if (this.state.current_progress <= progressBarContent.length - 2) {
      const current_progress = this.state.current_progress + 1;
      this.setState({ current_progress: current_progress });
    }
  };

  render() {
    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <b>Demonstration</b>
          </Title>

          <Paragraph style={{ fontSize: "16px" }}>
            Try out the iTutor pipeline demonstration by following the
            processing steps below.
          </Paragraph>

          <Steps
            current={this.state.current_progress}
            items={progressBarContent}
          />

          <Row>
            <p>
              在这里按照不同的步骤，显示不同的内容。应记录每一个步骤的选项，支持倒回去查看和更改尝试。
              建议创建新的文件夹demonstration-submodules，在里面分别按照每个步骤创建js文件；通过setState方法来记录状态，实现demo呈现。
            </p>
            <p>--- Your code enter here ---</p>
          </Row>

          <Row
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Button type="primary" onClick={() => this.prev()}>
              <LeftCircleOutlined />
              Prev
            </Button>{" "}
            &nbsp;&nbsp;
            <Button type="primary" onClick={() => this.forward()}>
              Next
              <RightCircleOutlined />
            </Button>
          </Row>
        </Content>
      </div>
    );
  }
}

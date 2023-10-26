import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button, Radio, Space } from "antd";
import { Layout, Row, Col, Select } from "antd";
// Import all the images here
import ImageReader from "./demonstration-submodules/image-reader";
// Import all the prompt here
import JsonReader from "./demonstration-submodules/json-reader";
// Import all the response here
import MarkdownReader from "./demonstration-submodules/prompt-reader";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const progressBarContent = [
  {
    title: "Requirement",
    description: "输入需求",
  },
  {
    title: "Prompt Generation",
    description: "生成提示词",
  },
  {
    title: "Instruction & Tutorial Generation",
    description: "模型返回与生成教程",
  },
];

const optionMap = {
  "TikTok-01": {
    "I want to add my neighbor as my friend on Tiktok.": "TikTok-01-01",
    "I want to look at the videos I've liked.": "TikTok-01-02",
  },
  "TikTok-02": {
    "I want to make videos.": "TikTok-02-01",
  },
  "TikTok-03": {
    "I wonder if I have any new fans?": "TikTok-03-01",
    "Check my new messages.": "TikTok-03-02",
  },
  "UberEats-01": {
    "I don't want Onions on my hamburger.": "UberEats-01-01",
  },
  "UberEats-02": {
    "I want my food delivered as quickly as possible.": "UberEats-02-01",
  },
  "UberEats-03": {
    "I'd like to see what I ordered and check out.": "UberEats-03-01",
  },
  "YahooNews-01": {
    "I'd like to see the latest news from the United States.":
      "YahooNews-01-01",
    "The interface is too bright, dim it a bit.": "YahooNews-01-02",
    "Login to my account.": "YahooNews-01-03",
    "What are some recent videos that people have been following.":
      "YahooNews-01-04",
  },
  "YahooNews-02": {
    "What are some recent videos that people have been following?":
      "YahooNews-02-01",
  },
  "YahooNews-03": {
    "I don't want to use traffic to watch videos.": "YahooNews-03-01",
    "I'd like to make some suggestions for this software.": "YahooNews-03-02",
  },
};

export default class Demonstration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_progress: 0,
      img_id: "TikTok-01",
      command_state: Object.keys(optionMap["TikTok-01"])[0],
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

  handleImageChoiceChange = (value) => {
    this.setState({
      img_id: value,
      command_state: Object.keys(optionMap[value])[0],
    });
    //console.log(Object.keys(optionMap[value])[0]);
  };

  onCommandChange = (e) => {
    this.setState({
      command_state: e.target.value,
    });
    //console.log(e.target.value);
  };

  conditionalGetCommand = () => {
    //console.log(this.state.command_state)
    return (
      <div>
        <Radio.Group
          value={this.state.command_state}
          onChange={this.onCommandChange}
        >
          <Space direction="vertical">
            {Object.keys(optionMap[this.state.img_id]).map((key) => (
              <Radio value={key}>{key}</Radio>
            ))}
          </Space>
        </Radio.Group>
      </div>
    );
  };

  conditionalRender = () => {
    let display_id = optionMap[this.state.img_id][this.state.command_state];
    switch (this.state.current_progress) {
      case 0:
        let image_referer = this.state.img_id;
        return (
          <div>
            <Row>
              <Col span={12}>
                <ImageReader image_referer={image_referer} />
              </Col>
              <Col span={12}>
                <Paragraph style={{ fontSize: "16px" }}>
                  <b>Please select an UI image with a paired command.</b>
                </Paragraph>
                <Select
                  defaultValue={this.state.img_id}
                  style={{
                    width: "60%",
                  }}
                  onChange={this.handleImageChoiceChange}
                  options={Object.keys(optionMap).map((key) => ({
                    value: key,
                    label: key,
                  }))}
                />
                <br />
                <br />
                {this.conditionalGetCommand()}
              </Col>
            </Row>
          </div>
        );
      case 1:
        return (
          <div>
              <Text>
                <MarkdownReader display_id={display_id} />
              </Text>

          </div>
        );
      case 2:
        return (
          <div>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <JsonReader
                  display_id={display_id}
                />
              </Col>
              <Col span={12}>
                <ImageReader image_referer={this.state.command_state} />
              </Col>
            </Row>
          </div>
        );
      default:
        return <div>Empty</div>;
    }
  };

  render() {
    const CONTENT = {
      english: "This is a demonstration of iTutor's dataflow. You can follow the steps to try out this static demo.",
      chinese: "以下是iTutor系统按数据流的展示。您可以按照步骤条提示尝试此静态演示。",
    }

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
            {CONTENT[this.props.language]}
          </Paragraph>

          <Steps
            current={this.state.current_progress}
            items={progressBarContent}
          />

          <br />

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

          <br />

          {this.conditionalRender()}
        </Content>
      </div>
    );
  }
}

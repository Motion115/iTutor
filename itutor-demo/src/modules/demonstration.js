import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button, Radio, Space } from "antd";
import { Layout, Row, Col, Select, Image, Card } from "antd";
// Import all the images here
import ImageReader from "./demonstration-submodules/image-reader";
// Import all the prompt here
import JsonReader from "./demonstration-submodules/json-reader";
// Import all the response here
import MarkdownReader from "./demonstration-submodules/prompt-reader";

const { Title, Paragraph, Text, Link } = Typography;
const { Content } = Layout;

const progressBarContent = [
  {
    title: "Select UI Image and Command",
    description: "Select an UI page.",
  },
  {
    title: "Prompt & Instruction",
    description: "Prompt the LLM.",
  },
  {
    title: "Instruction Translation",
    description: "A multimodal tutorial.",
  },
];

const picStyle = {
  width: "40%",
  display: "block",
  margin: "auto",
};

const optionMap = {
  "TikTok-01": {
    "I want to add my neighbor as my friend on Tiktok.": "TikTok-01-01",
    "I want to look at the videos I've liked.": "TikTok-01-02",
  },
  "TikTok-02": {
    "I want to Tiktok.": "TikTok-02-01",
    "I want to I've liked.": "TikTok-02-02",
  },
  "TikTok-03": {
    "add my neighbor as my friend on Tiktok.": "TikTok-03-01",
    "at the videos I've liked.": "TikTok-03-02",
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
            <Paragraph>
              <MarkdownReader display_id={display_id} />
            </Paragraph>
          </div>
        );
      case 2:
        return (
          <div>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <JsonReader display_id={display_id} />
              </Col>
              <Col span={12}>
                这里面是对应的图片，使用image-reader模块
              </Col>
            </Row>
          </div>
        );
      default:
        return <div>cll</div>;
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

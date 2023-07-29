import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button, Radio } from "antd";
import { Layout, Row, Col, Select, Image } from "antd";
import ImageReader from "./demonstration-submodules/image-reader";
import tiktok_01_pic from "../assets/tiktok-01~05.jpg";
import tiktok_02_pic from "../assets/tiktok-06.jpg";
import tiktok_03_pic from "../assets/tiktok-07~09.jpg";
import { Card } from "antd";
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
      step_1: 1,
      img_id: "TikTok-01",
      command_state: optionMap["TikTok-01"][0],
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
      command_state: optionMap[value][0]
    });
  };

  conditionalGetPicture = () => {
    switch (this.state.img_id) {
      case "TikTok-01":
        return <Image src={tiktok_01_pic} style={picStyle} />;
      case "TikTok-02":
        return <Image src={tiktok_02_pic} style={picStyle} />;
      case "TikTok-03":
        return <Image src={tiktok_03_pic} style={picStyle} />;
      default:
        return <div>please go back and select an UI image</div>;
    }
  };

  onCommandChange = (e) => {
    this.setState({
      command_state: e.target.value,
    });
    console.log(e.target.value);
  };

  conditionalGetCommand = () => {
    console.log(this.state.command_state)
    return (
      <div>
        <Radio.Group
          options={Object.keys(optionMap[this.state.img_id])}
          onChange={this.onCommandChange}
          defaultValue={Object.keys(optionMap[this.state.img_id])[0]}
        />
      </div>
    );
  };

  conditionalRender = () => {
    switch (this.state.current_progress) {
      case 0:
        return (
          <div>
            <Row>
              <Col span={12}>{this.conditionalGetPicture()}</Col>
              <Col span={12}>
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
                {this.conditionalGetCommand()}
              </Col>
            </Row>
          </div>
        );
      case 2:
        switch (this.state.img_id) {
          case 211:
            return (
              <div>
                <Card title="Prompt Generation" bordered={false}>
                  <p>
                    "Your task is to act like a tutor, where you need to
                    instruct a user how to operate a given application and
                    explain what this operation does. The explanation should be
                    around 50 words, and no longer than 100 words.
                  </p>

                  <p>
                    You will be provided with the following metadata for making
                    your decision: 1. The general purpose of the page is
                    provided in between two exclamation marks. the purpose is
                    one of the following 20 classes: bare, dialer, camera, chat,
                    editor, form, gallery, list, login, maps, mediaplayer, menu,
                    modal, news, other, profile, search, settings, terms, and
                    tutorial. 2. The UI components of the page are provided in
                    JSON format and rounded by the dollar sign. All the possible
                    types of UI components are Button, Input, Icon, Checkbox,
                    Selector, Switch, Container, Tag, Menu. Each of the types is
                    a possible attribute in the JSON. 3. The command from the
                    user will be provided in triple backticks.
                  </p>

                  <p>
                    You should reply with JSON source code. You should provide 4
                    attributes: 1. "Command": repeat the command of the user. 2.
                    "Operation": a list, including the first next two steps of
                    operation. 3. "Key": a list. Index 0 is the attribute in the
                    UI component JSON, and index 1 should the annotation of the
                    element. 4. "Explanation": the explanation of the proposed
                    operation.
                  </p>

                  <p>
                    The metadata is as follows: !other! $ "Icon": [ "Upload",
                    "Menu", "Retweet", "Lock", "Heart", "Tablet", "Plus",
                    "Footmark" ], "Button": [ "Edit profile", "Add friends" ],
                    "Tag":[ "Hide", "Following", "Followers", "Likes" ] "Menu":
                    [ "Home ", "Friends", "Profile", "Inbox" ] $ ``` I want to
                    add my neighbor as my friend on Tiktok.```
                  </p>
                </Card>
              </div>
            );
          default:
            return <div>111</div>;
        }
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

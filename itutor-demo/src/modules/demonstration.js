import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button } from "antd";
import { Layout, Row } from "antd";
import { Image } from "antd";
import tiktok_01_pic from "../assets/tiktok-01~05.jpg";
import tiktok_02_pic from "../assets/tiktok-06.jpg";
import tiktok_03_pic from "../assets/tiktok-07~09.jpg";
import ubereats_01_pic from "../assets/ubereats_01.png";
import ubereats_02_pic from "../assets/ubereats_02.png";
import ubereats_03_pic from "../assets/ubereats_03.png";
import yahoonews_01_pic from "../assets/yahoonews-01~04.png";
import yahoonews_02_pic from "../assets/yahoonews-05.png";
import yahoonews_03_pic from "../assets/yahoonews-06&08.png";
import { Col } from "antd";
import { Card } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;
const { Content } = Layout;

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

const dataset = {
  "tiktok-1": {
    source: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    command: [
      {
        command_text: " I want to add my neighbor as my friend on Tiktok.",
        return_text: "Click 'Menu' icon and change nickname.",
      },
    ],
  },
};

export default class Demonstration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_progress: 0,
      step_1: 1,
      img_id: 0,
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

  selectImagetiktok_01 = () => {
    this.state.img_id = 11
    console.log("img_id: ", this.state.img_id);
  }
  selectImagetiktok_02 = () => {
    this.state.img_id = 12
    console.log("img_id: ", this.state.img_id);
  }
  selectImagetiktok_03 = () => {
    this.state.img_id = 13
    console.log("img_id: ", this.state.img_id);
  }

  selectImageubereats_01 = () => {
    this.state.img_id = 21
    console.log("img_id: ", this.state.img_id);
  }
  selectImageubereats_02 = () => {
    this.state.img_id = 22
    console.log("img_id: ", this.state.img_id);
  }
  selectImageubereats_03 = () => {
    this.state.img_id = 23
    console.log("img_id: ", this.state.img_id);
  }

  selectImageyahoonews_01 = () => {
    this.state.img_id = 31
    console.log("img_id: ", this.state.img_id);
  }
  selectImageyahoonews_02 = () => {
    this.state.img_id = 32
    console.log("img_id: ", this.state.img_id);
  }
  selectImageyahoonews_03 = () => {
    this.state.img_id = 33
    console.log("img_id: ", this.state.img_id);
  }

  selectCommand_tiktok_01 = () => {
    this.state.img_id = 211
    console.log("img_id: ", this.state.img_id);
  }


  conditionalRender = () => {
    switch (this.state.current_progress) {
      case 0:
        return <div>
          <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
          <Row>
            <Col span={8}><Image
              src={tiktok_01_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={tiktok_02_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={tiktok_03_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
          </Row>
          <Row>
            <Col offset={3}><Button onClick={() => this.selectImagetiktok_01()}>tiktok_01
            </Button></Col>
            <Col offset={5}><Button onClick={() => this.selectImagetiktok_02()}>tiktok_02
            </Button></Col>
            <Col offset={6}><Button onClick={() => this.selectImagetiktok_03()}>tiktok_03
            </Button></Col>
          </Row>
          <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
          <Row>
            <Col span={8}><Image
              src={ubereats_01_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={ubereats_02_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={ubereats_03_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
          </Row>
          <Row>
            <Col offset={2}><Button onClick={() => this.selectImageubereats_01()}>ubereats_01
            </Button></Col>
            <Col offset={6}><Button onClick={() => this.selectImageubereats_02()}>ubereats_02
            </Button></Col>
            <Col offset={5}><Button onClick={() => this.selectImageubereats_03()}>ubereats_03
            </Button></Col>
          </Row>
          <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
          <Row>
            <Col span={8}><Image
              src={yahoonews_01_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={yahoonews_02_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
            <Col span={8}><Image
              src={yahoonews_03_pic}
              style={{
                width: "75%",
                height: "75%",
                display: "block",
                margin: "auto",
              }}
            /></Col>
          </Row>
          <Row>
            <Col offset={2}><Button onClick={() => this.selectImageyahoonews_01()}>yahoonews_01
            </Button></Col>
            <Col offset={5}><Button onClick={() => this.selectImageyahoonews_02()}>yahoonews_02
            </Button></Col>
            <Col offset={4}><Button onClick={() => this.selectImageyahoonews_03()}>yahoonews_03
            </Button></Col>
          </Row>
          <Content style={{ padding: "20px 20px 20px 20px" }}></Content>

        </div>;
      case 1:
        switch (this.state.img_id) {
          case 11:
            return <div>
              <Content style={{ padding: "10px 10px 10px 10px" }}></Content>
              Command:
              <Content style={{ padding: "10px 10px 10px 10px" }}></Content>
              <Button onClick={() => this.selectCommand_tiktok_01()}>
                " I want to add my neighbor as my friend on Tiktok."
              </Button>
              <Content style={{ padding: "10px 10px 10px 10px" }}></Content>
              <Button onClick={() => this.selectCommand_tiktok_02()}>
                " I want to look at the videos I've liked."
              </Button>
            </div>;
          case 12:
            return <div>12</div>;
          case 13:
            return <div>13</div>;
          case 21:
            return <div>21</div>;
          case 22:
            return <div>22</div>;
          case 23:
            return <div>23</div>;
          case 31:
            return <div>31</div>;
          case 32:
            return <div>32</div>;
          case 33:
            return <div>33</div>;
          default:
            return <div>please go back and select an UI image</div>
        }
      case 2:
        switch (this.state.img_id) {
          case 211:
            return <div><Card
              title="Prompt Generation"
              bordered={false}
              style={{
                width: 800,
              }}
            >
              <p>"Your task is to act like a tutor, where you need to instruct a user how to operate a given application and explain what this operation does. The explanation should be around 50 words, and no longer than 100 words.</p>

              <p>You will be provided with the following metadata for making your decision:
                1. The general purpose of the page is provided in between two exclamation marks. the purpose is one of the following 20 classes: bare, dialer, camera, chat, editor, form, gallery, list, login, maps, mediaplayer, menu, modal, news, other, profile, search, settings, terms, and tutorial.
                2. The UI components of the page are provided in JSON format and rounded by the dollar sign. All the possible types of UI components are Button, Input, Icon, Checkbox, Selector, Switch, Container, Tag, Menu. Each of the types is a possible attribute in the JSON.
                3. The command from the user will be provided in triple backticks.</p>

                <p>You should reply with JSON source code. You should provide 4 attributes:
                1. "Command": repeat the command of the user.
                2. "Operation": a list, including the first next two steps of operation.
                3. "Key": a list. Index 0 is the attribute in the UI component JSON, and index 1 should the annotation of the element.
                4. "Explanation": the explanation of the proposed operation.</p>

                <p>The metadata is as follows:
                !other!
                $
                "Icon": [
                "Upload",
                "Menu",
                "Retweet",
                "Lock",
                "Heart",
                "Tablet",
                "Plus",
                "Footmark"
                ],
                "Button": [
                "Edit profile",
                "Add friends"
                ],
                "Tag":[
                "Hide",
                "Following",
                "Followers",
                "Likes"
                ]
                "Menu": [
                "Home ",
                "Friends",
                "Profile",
                "Inbox"
                ]
                $
                ``` I want to add my neighbor as my friend on Tiktok.```</p>
            </Card></div>
          default:
            return <div>111</div>
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

          <Paragraph>
            {dataset["tiktok-1"].command_text}
          </Paragraph>

          <Paragraph style={{ fontSize: "16px" }}>
            Try out the iTutor pipeline demonstration by following the
            processing steps below.
          </Paragraph>

          <Steps
            current={this.state.current_progress}
            items={progressBarContent}
          />

          {this.conditionalRender()}

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

import React from "react";
import { Typography, Image, Layout, Row, Col } from "antd";
import ContentBlock from "./helper";
import { FireTwoTone } from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = {
      english: {
        design_considerations: {
          title: "Design Considerations",
          considerations: (
            <div>
              <li>DC1: Applying Voice User Interface (VUI)</li>
              <li>DC2: Enhancing VUI with highlighted visual guidance</li>
              <li>DC3: Using self-adaptive interfaces</li>
            </div>
          ),
          explaination: (
            <div>
              <Paragraph>
                Tutorial Generation is where iTutor interacts with elders. We
                designed a Natural User Interface (NUI) to align with the
                cognitive patterns of the elders, making it easier for them to
                use the device.
              </Paragraph>
            </div>
          ),
        },
        user_study: {
          title: "User Study",
          progress: (
            <div>
              <FireTwoTone
                twoToneColor="#F3470D"
                style={{ fontSize: "20px" }}
              />
              iTutor still under development.
            </div>
          ),
          plan: (
            <div>
              <Paragraph>
                We plan to recruit several participants (age {">"} 60) who are
                unfamiliar with smartphone usage to participate in our study. We
                will instruct the participants to perform the following tasks
                using iTutor: making taxi calls, using navigation, mobile
                payments, and phone calls.
              </Paragraph>
            </div>
          ),
        },
      },
      chinese: {
        design_considerations: {
          title: "设计考量",
          considerations: (
            <div>
              <li>DC1: 使用语音交互界面 (VUI)</li>
              <li>DC2: 用显著的视觉提示强化VUI界面</li>
              <li>DC3: 使用自适应的界面</li>
            </div>
          ),
          explaination: (
            <div>
              <Paragraph>
                这一部分是iTutor与长辈用户群体交互的触点。
                我们设计了自然用户界面（NUI）以尽可能匹配老年人的认知模式，使他们更容易使用手机等设备。
              </Paragraph>
            </div>
          ),
        },
        user_study: {
          title: "用户研究",
          progress: (
            <div>
              <FireTwoTone
                twoToneColor="#F3470D"
                style={{ fontSize: "20px" }}
              />
              iTutor系统仍在开发，我们将在开发完成后进行用户实验。
            </div>
          ),
          plan: (
            <div>
              <Paragraph>
                我们计划招募若干不熟悉智能手机使用的参与者（年龄 {">"} 60
                岁）来参与我们的研究。 我们将指导参与者使用 iTutor
                执行以下任务：叫车、导航、电子支付和打电话。
              </Paragraph>
            </div>
          ),
        },
      },
    };

    return (
      <div>
        <ContentBlock
          title={content[this.props.language]["design_considerations"]["title"]}
          description={
            content[this.props.language]["design_considerations"][
              "considerations"
            ]
          }
          media={
            content[this.props.language]["design_considerations"][
              "explaination"
            ]
          }
        />
        <ContentBlock
          title={content[this.props.language]["user_study"]["title"]}
          description={content[this.props.language]["user_study"]["progress"]}
          media={content[this.props.language]["user_study"]["plan"]}
        />
      </div>
    );
  }
}

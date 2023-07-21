import React from "react";
import { Typography, Image, Layout, Row, Col } from "antd";
import ContentBlock from "./helper";
import { FireTwoTone } from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  render() {
    return (
      <div>
        <ContentBlock
          title="Design Considerations"
          description={
            <div>
              <li>DC1: Applying Voice User Interface (VUI)</li>
              <li>DC2: Enhancing VUI with highlighted visual guidance</li>
              <li>DC3: Using self-adaptive interfaces</li>
            </div>
          }
          media={
            <div>
              <Paragraph>
                Tutorial Generation is where iTutor interacts with elders. We
                designed a Natural User Interface (NUI) to align with the
                cognitive patterns of the elders, making it easier for them to
                use the device.
              </Paragraph>
            </div>
          }
        />
        <ContentBlock
          title="User Study"
          description={
            <div>
              <FireTwoTone
                twoToneColor="#F3470D"
                style={{ fontSize: "20px" }}
              />
              iTutor still under development.
            </div>
          }
          media={
            <div>
              <Paragraph>
                We plan to recruit several participants (age {">"} 60) who are
                unfamiliar with smartphone usage to participate in our study. We
                will instruct the participants to perform the following tasks
                using iTutor: making taxi calls, using navigation, mobile
                payments, and phone calls.
              </Paragraph>
            </div>
          }
        />
      </div>
    );
  }
}

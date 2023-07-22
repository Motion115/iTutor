import React from "react";
import { Typography } from "antd";
import { Layout, Row } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;

export default class ConceptVideo extends React.Component {
  render() {
    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <b>Concept Video</b>
          </Title>

          <Paragraph>
            !This is a temporary video to test the build of the website. We will
            update the video as soon as possible!
          </Paragraph>

          <Row
            style={{
              width: "60%",
              height: "auto",
              display: "block",
              margin: "auto",
            }}
          >
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1sR4y1P7n3&page=1&as_wide=1&high_quality=1&danmaku=0&autoplay=0&t=0"
              allowfullscreen="allowfullscreen"
              width="100%"
              height="400px"
              frameborder="0"
              sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
              title="concept-video"
            ></iframe>
          </Row>
        </Content>
      </div>
    );
  }
}

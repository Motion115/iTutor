import React from "react";
import { Typography, Row, Col } from "antd";
const { Paragraph } = Typography;

export default class ContentBlock extends React.Component {
  render() {
    return (
      <div>
        <Row style={{ justifyContent: "center", alignItems: "center" }}>
          <Col span={6} style={{ padding: "8px 8px 8px 8px" }}>
            <Paragraph
              style={{
                fontSize: "18px",
                fontStyle: "oblique",
                fontWeight: "bold",
              }}
            >
              {this.props.title}
            </Paragraph>
          </Col>
          <Col span={9} style={{ padding: "8px 8px 8px 8px" }}>
            <Paragraph style={{ fontSize: "14px"}}>
              {this.props.description}
            </Paragraph>
          </Col>
          <Col span={9} style={{ padding: "8px 8px 8px 8px" }}>
            {this.props.media}
          </Col>
        </Row>
      </div>
    );
  }
}

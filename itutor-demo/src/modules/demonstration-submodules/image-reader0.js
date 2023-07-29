import React from "react";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Typography, Steps, Button, Radio } from "antd";
import { Layout, Row } from "antd";
import { Image } from "antd";
import tiktok_01_pic from "../../assets/tiktok-01~05.jpg";
import tiktok_02_pic from "../../assets/tiktok-06.jpg";
import tiktok_03_pic from "../../assets/tiktok-07~09.jpg";
import ubereats_01_pic from "../../assets/ubereats_01.png";
import ubereats_02_pic from "../../assets/ubereats_02.png";
import ubereats_03_pic from "../../assets/ubereats_03.png";
import yahoonews_01_pic from "../../assets/yahoonews-01~04.png";
import yahoonews_02_pic from "../../assets/yahoonews-05.png";
import yahoonews_03_pic from "../../assets/yahoonews-06&08.png";
import { Col } from "antd";
const { Content } = Layout;

const picStyle = {
  width: "75%",
  height: "75%",
  display: "block",
  margin: "auto",
};

export default class ImageReader extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.display_id)
  }


  render() {
    return (
    <div>
      <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
      <Row>
        <Col span={8}>
          <Image src={tiktok_01_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={tiktok_02_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={tiktok_03_pic} style={picStyle} />
        </Col>
      </Row>
      <Row>
        <Col offset={3}>
          <Button onClick={() => this.selectImage(11)}>tiktok_01</Button>
        </Col>
        <Col offset={5}>
          <Button onClick={() => this.selectImagetiktok_02()}>tiktok_02</Button>
        </Col>
        <Col offset={6}>
          <Button onClick={() => this.selectImagetiktok_03()}>tiktok_03</Button>
        </Col>
      </Row>
      <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
      <Row>
        <Col span={8}>
          <Image src={ubereats_01_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={ubereats_02_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={ubereats_03_pic} style={picStyle} />
        </Col>
      </Row>
      <Row>
        <Col offset={2}>
          <Button onClick={() => this.selectImageubereats_01()}>
            ubereats_01
          </Button>
        </Col>
        <Col offset={6}>
          <Button onClick={() => this.selectImageubereats_02()}>
            ubereats_02
          </Button>
        </Col>
        <Col offset={5}>
          <Button onClick={() => this.selectImageubereats_03()}>
            ubereats_03
          </Button>
        </Col>
      </Row>
      <Content style={{ padding: "40px 40px 40px 40px" }}></Content>
      <Row>
        <Col span={8}>
          <Image src={yahoonews_01_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={yahoonews_02_pic} style={picStyle} />
        </Col>
        <Col span={8}>
          <Image src={yahoonews_03_pic} style={picStyle} />
        </Col>
      </Row>
      <Row>
        <Col offset={2}>
          <Button onClick={() => this.selectImageyahoonews_01()}>
            yahoonews_01
          </Button>
        </Col>
        <Col offset={5}>
          <Button onClick={() => this.selectImageyahoonews_02()}>
            yahoonews_02
          </Button>
        </Col>
        <Col offset={4}>
          <Button onClick={() => this.selectImageyahoonews_03()}>
            yahoonews_03
          </Button>
        </Col>
      </Row>
      <Content style={{ padding: "20px 20px 20px 20px" }}></Content>
    </div>
    )
  }
}

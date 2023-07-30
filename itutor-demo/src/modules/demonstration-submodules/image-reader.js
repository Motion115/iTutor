import React from "react";
import { Image } from "antd";
import tiktok_01_pic from "../../assets/demo-pic/tiktok-01-02-03-04-05.jpg";
import tiktok_02_pic from "../../assets/demo-pic/tiktok-06.jpg";
import tiktok_03_pic from "../../assets/demo-pic/tiktok-07-08-09.jpg";
import ubereats_01_pic from "../../assets/demo-pic/ubereats-01.jpg";
import ubereats_02_pic from "../../assets/demo-pic/ubereats-02.jpg";
import ubereats_03_pic from "../../assets/demo-pic/ubereats-03.jpg";
import yahoonews_01_pic from "../../assets/demo-pic/yahoo-news-01-02-03-04.png";
import yahoonews_02_pic from "../../assets/demo-pic/yahoo-news-05.png";
import yahoonews_03_pic from "../../assets/demo-pic/yahoo-news-06-08.png";

const picStyle = {
  width: "40%",
  display: "block",
  margin: "auto",
};

const picMap = {
  "TikTok-01": <Image src={tiktok_01_pic} style={picStyle}/>,
  "TikTok-02": <Image src={tiktok_02_pic} style={picStyle}/>,
  "TikTok-03": <Image src={tiktok_03_pic} style={picStyle}/>,
  "UberEats-01":<Image src={ubereats_01_pic} style={picStyle}/>,
  "UberEats-02":<Image src={ubereats_02_pic} style={picStyle}/>,
  "UberEats-03":<Image src={ubereats_03_pic} style={picStyle}/>,
  "YahooNews-01":<Image src={yahoonews_01_pic} style={picStyle}/>,
  "YahooNews-02":<Image src={yahoonews_02_pic} style={picStyle}/>,
  "YahooNews-03":<Image src={yahoonews_03_pic} style={picStyle}/>,
};

export default class ImageReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_referer: props.image_referer,
    };
    console.log(props.image_referer)
  }

  componentDidUpdate(prevProps) {
    if (this.props.image_referer !== prevProps.image_referer) {
      this.setState({
        image_referer: this.props.image_referer,
      });
    }
  }

  render() {
    return (
      <div>
        {picMap[this.state.image_referer]}
      </div>
    );
  }
}
import React from "react";
import { Image } from "antd";
import tiktok_01_pic from "../../assets/demo-pic/tiktok-01-02-03-04-05.jpg";
import tiktok_02_pic from "../../assets/demo-pic/tiktok-06.jpg";
import tiktok_03_pic from "../../assets/demo-pic/tiktok-07-08-09.jpg";

const picStyle = {
  width: "40%",
  display: "block",
  margin: "auto",
};

const picMap = {
  "TikTok-01": <Image src={tiktok_01_pic} style={picStyle}/>,
  "TikTok-02": <Image src={tiktok_02_pic} style={picStyle}/>,
  "TikTok-03": <Image src={tiktok_03_pic} style={picStyle}/>,
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
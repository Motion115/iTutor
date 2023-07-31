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

import tiktokresult_01_01_pic from "../../assets/demo-pic/TT-result-01-01.png";
import tiktokresult_01_02_pic from "../../assets/demo-pic/TT-result-01-02.png";
import tiktokresult_02_01_pic from "../../assets/demo-pic/TT-result-02-01.png";
import tiktokresult_03_01_pic from "../../assets/demo-pic/TT-result-03-01.png";
import tiktokresult_03_02_pic from "../../assets/demo-pic/TT-result-03-02.png";
import ubereatsresult_01_01_pic from "../../assets/demo-pic/UE-result-01-01.png";
import ubereatsresult_02_01_pic from "../../assets/demo-pic/UE-result-02-01.png";
import ubereatsresult_03_01_pic from "../../assets/demo-pic/UE-result-03-01.png";
import yahoonewsresult_01_01_pic from "../../assets/demo-pic/YN-result-01-01.png";
import yahoonewsresult_01_02_pic from "../../assets/demo-pic/YN-result-01-02.png";
import yahoonewsresult_01_03_pic from "../../assets/demo-pic/YN-result-01-03.png";
import yahoonewsresult_01_04_pic from "../../assets/demo-pic/YN-result-01-04.png";
import yahoonewsresult_02_01_pic from "../../assets/demo-pic/YN-result-02-01.png";
import yahoonewsresult_03_01_pic from "../../assets/demo-pic/YN-result-03-01.png";
import yahoonewsresult_03_02_pic from "../../assets/demo-pic/YN-result-03-02.png";

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
  "UberEats-03": <Image src={ubereats_03_pic} style={picStyle} />,
  "YahooNews-01": <Image src={yahoonews_01_pic} style={picStyle} />,
  "YahooNews-02": <Image src={yahoonews_02_pic} style={picStyle} />,
  "YahooNews-03": <Image src={yahoonews_03_pic} style={picStyle} />,

  "I want to add my neighbor as my friend on Tiktok.": <Image src={tiktokresult_01_01_pic} style={picStyle} />,
  "I want to look at the videos I've liked.": <Image src={tiktokresult_01_02_pic} style={picStyle} />,
  "I want to make videos.": <Image src={tiktokresult_02_01_pic} style={picStyle} />,
  "I wonder if I have any new fans?": <Image src={tiktokresult_03_01_pic} style={picStyle} />,
  "Check my new messages.": <Image src={tiktokresult_03_02_pic} style={picStyle} />,
  "I don't want Onions on my hamburger.": <Image src={ubereatsresult_01_01_pic} style={picStyle} />,
  "I want my food delivered as quickly as possible.": <Image src={ubereatsresult_02_01_pic} style={picStyle} />,
  "I'd like to see what I ordered and check out.": <Image src={ubereatsresult_03_01_pic} style={picStyle} />,
  "I'd like to see the latest news from the United States.": <Image src={yahoonewsresult_01_01_pic} style={picStyle} />,
  "The interface is too bright, dim it a bit.": <Image src={yahoonewsresult_01_02_pic} style={picStyle} />,
  "Login to my account.": <Image src={yahoonewsresult_01_03_pic} style={picStyle} />,
  "What are some recent videos that people have been following.": <Image src={yahoonewsresult_01_04_pic} style={picStyle} />,
  "What are some recent videos that people have been following?": <Image src={yahoonewsresult_02_01_pic} style={picStyle} />,
  "I don't want to use traffic to watch videos.": <Image src={yahoonewsresult_03_01_pic} style={picStyle} />,
  "I'd like to make some suggestions for this software.": <Image src={yahoonewsresult_03_02_pic} style={picStyle} />,

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
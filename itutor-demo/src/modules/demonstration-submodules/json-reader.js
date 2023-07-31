import React from "react";
import ReactJson from "react-json-view";

import tikTok_01_01 from "../../assets/demo-response/tikTok-01-01.json";
import tikTok_01_02 from "../../assets/demo-response/tikTok-01-02.json";
import tikTok_02_01 from "../../assets/demo-response/tikTok-02-01.json";
import tikTok_03_01 from "../../assets/demo-response/tikTok-03-01.json";
import tikTok_03_02 from "../../assets/demo-response/tikTok-03-02.json";
import uberEats_01_01 from "../../assets/demo-response/uberEats-01-01.json";
import uberEats_02_01 from "../../assets/demo-response/uberEats-02-01.json";
import uberEats_03_01 from "../../assets/demo-response/uberEats-03-01.json";
import yahooNews_01_01 from "../../assets/demo-response/yahooNews-01-01.json";
import yahooNews_01_02 from "../../assets/demo-response/yahooNews-01-02.json";
import yahooNews_01_03 from "../../assets/demo-response/yahooNews-01-03.json";
import yahooNews_01_04 from "../../assets/demo-response/yahooNews-01-04.json";
import yahooNews_02_01 from "../../assets/demo-response/yahooNews-02-01.json";
import yahooNews_03_01 from "../../assets/demo-response/yahooNews-03-01.json";
import yahooNews_03_02 from "../../assets/demo-response/yahooNews-03-02.json";
//react-json-view: https://www.npmjs.com/package/react-json-view

const displayIdMap = {
  "TikTok-01-01": <ReactJson src={tikTok_01_01} />,
  "TikTok-01-02": <ReactJson src={tikTok_01_02} />,
  "TikTok-02-01": <ReactJson src={tikTok_02_01} />,
  "TikTok-03-01": <ReactJson src={tikTok_03_01} />,
  "TikTok-03-02": <ReactJson src={tikTok_03_02} />,
  "UberEats-01-01":<ReactJson  src={uberEats_01_01} />,
  "UberEats-02-01":<ReactJson  src={uberEats_02_01} />,
  "UberEats-03-01":<ReactJson  src={uberEats_03_01} />,
  "YahooNews-01-01":<ReactJson src={yahooNews_01_01} />,
  "YahooNews-01-02":<ReactJson src={yahooNews_01_02} />,
  "YahooNews-01-03":<ReactJson src={yahooNews_01_03} />,
  "YahooNews-01-04":<ReactJson src={yahooNews_01_04} />,
  "YahooNews-02-01":<ReactJson src={yahooNews_02_01} />,
  "YahooNews-03-01":<ReactJson src={yahooNews_03_01} />,
  "YahooNews-03-02":<ReactJson src={yahooNews_03_02} />,
};

export default class JsonReader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_id: props.display_id,
    }
    // console.log(props.display_id)
  }

  render() {
    return (
      <div>
        {displayIdMap[this.state.display_id]}
      </div>
    );
  }
}

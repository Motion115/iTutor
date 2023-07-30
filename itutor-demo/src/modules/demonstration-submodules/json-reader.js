import React from "react";
import ReactJson from "react-json-view";

import tikTok_01 from "../../assets/demo-response/tikTok-01.json";
import tikTok_02 from "../../assets/demo-response/tikTok-02.json";


// react-json-view: https://www.npmjs.com/package/react-json-view

const displayIdMap = {
  "TikTok-01-01": <ReactJson src={tikTok_01} />,
  "TikTok-01-02": <ReactJson src={tikTok_02} />,
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

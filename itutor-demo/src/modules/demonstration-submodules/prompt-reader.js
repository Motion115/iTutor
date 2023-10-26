import tikTok_01_01 from "../../assets/demo-prompt/prompt-tt01-01.md";
import tikTok_01_02 from "../../assets/demo-prompt/prompt-tt01-02.md";
import tikTok_02_01 from "../../assets/demo-prompt/prompt-tt02-01.md";
import tikTok_03_01 from "../../assets/demo-prompt/prompt-tt03-01.md";
import tikTok_03_02 from "../../assets/demo-prompt/prompt-tt03-02.md";
import uberEats_01_01 from "../../assets/demo-prompt/prompt-ue01-01.md";
import uberEats_02_01 from "../../assets/demo-prompt/prompt-ue02-01.md";
import uberEats_03_01 from "../../assets/demo-prompt/prompt-ue03-01.md";
import yahooNews_01_01 from "../../assets/demo-prompt/prompt-yn01-01.md";
import yahooNews_01_02 from "../../assets/demo-prompt/prompt-yn01-02.md";
import yahooNews_01_03 from "../../assets/demo-prompt/prompt-yn01-03.md";
import yahooNews_01_04 from "../../assets/demo-prompt/prompt-yn01-04.md";
import yahooNews_02_01 from "../../assets/demo-prompt/prompt-yn02-01.md";
import yahooNews_03_01 from "../../assets/demo-prompt/prompt-yn03-01.md";
import yahooNews_03_02 from "../../assets/demo-prompt/prompt-yn03-02.md";
import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
//import remarkGfm from "remark-gfm";

// react-markdown: https://www.npmjs.com/package/react-markdown

function useRenderMarkdown(source_markdown) {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch(source_markdown)
      .then((text) => text.text())
      .then((text) => {
        setData(text);
      });
  }, [source_markdown]);
  return <Markdown>{data}</Markdown>;
}

export default function MarkdownReader(props) {
  const displayIdMap = {
    "TikTok-01-01": useRenderMarkdown(tikTok_01_01),
    "TikTok-01-02": useRenderMarkdown(tikTok_01_02),
    "TikTok-02-01": useRenderMarkdown(tikTok_02_01),
    "TikTok-03-01": useRenderMarkdown(tikTok_03_01),
    "TikTok-03-02": useRenderMarkdown(tikTok_03_02),
    "UberEats-01-01": useRenderMarkdown(uberEats_01_01),
    "UberEats-02-01": useRenderMarkdown(uberEats_02_01),
    "UberEats-03-01": useRenderMarkdown(uberEats_03_01),
    "YahooNews-01-01":useRenderMarkdown(yahooNews_01_01),
    "YahooNews-01-02":useRenderMarkdown(yahooNews_01_02),
    "YahooNews-01-03":useRenderMarkdown(yahooNews_01_03),
    "YahooNews-01-04":useRenderMarkdown(yahooNews_01_04),
    "YahooNews-02-01":useRenderMarkdown(yahooNews_02_01),
    "YahooNews-03-01":useRenderMarkdown(yahooNews_03_01),
    "YahooNews-03-02":useRenderMarkdown(yahooNews_03_02),
  };
  // console.log(props.display_id);
  return (
    <div>
      {displayIdMap[props.display_id]}
    </div>
  );
}

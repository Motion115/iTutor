import tikTok_01 from "../../assets/demo-prompt/prompt.md";
import tikTok_02 from "../../assets/demo-prompt/prompt-test.md";
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
  return <Markdown >{data}</Markdown>;
}

export default function MarkdownReader(props) {
  const displayIdMap = {
    "TikTok-01-01": useRenderMarkdown(tikTok_01),
    "TikTok-01-02": useRenderMarkdown(tikTok_02),
  };
  // console.log(props.display_id);
  return (
    <div>
      {displayIdMap[props.display_id]}
    </div>
  );
}

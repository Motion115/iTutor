import React from "react";
import { Typography } from "antd";
import { Layout, Menu } from "antd";
import {
  ScanOutlined,
  DeliveredProcedureOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import InformationRetrievalModule from "./iTutor-submodules/ir-module.js";
import LLMModule from "./iTutor-submodules/llm-module.js";
import TranslationModule from "./iTutor-submodules/translation-module.js";

const { Title } = Typography;
const { Content } = Layout;

export default class Explaination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "1",
    };
  }

  switchModule = (e) => {
    //console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  conditionallyRenderModule = () => {
    switch (this.state.current) {
      case "1":
        return <InformationRetrievalModule language={this.props.language} />;
      case "2":
        return <LLMModule language={this.props.language} />;
      case "3":
        return <TranslationModule language={this.props.language} />;
      default:
        return <InformationRetrievalModule />;
    }
  };

  render() {
    const SELECTOR_CONTENT = {
      english: [
        "Metadata Retrieval",
        "Instruction Generation by LLMs",
        "Tutorial Interface Generation",
      ],
      chinese: ["UI元数据抽取", "基于LLM的指令生成", "教程界面生成"],
    };

    const MODULE_SELECTOR = [
      {
        key: "1",
        icon: <ScanOutlined />,
        label: SELECTOR_CONTENT[this.props.language][0],
        //children: [],
      },
      {
        key: "2",
        icon: <DeliveredProcedureOutlined />,
        label: SELECTOR_CONTENT[this.props.language][1],
      },
      {
        key: "3",
        icon: <TranslationOutlined />,
        label: SELECTOR_CONTENT[this.props.language][2],
      },
    ];

    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <b>Explaination</b>
          </Title>
          <Menu
            onClick={this.switchModule}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            items={MODULE_SELECTOR}
            style={{
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              width: "100%",
              margin: "0 auto",
            }}
          />
          {this.conditionallyRenderModule()}
        </Content>
      </div>
    );
  }
}

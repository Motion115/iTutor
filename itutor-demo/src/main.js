import React from "react";
import { Layout, Switch, ConfigProvider } from "antd";
import { Button } from "antd";
import { GithubOutlined, FilePdfOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import Introduction from "./modules/introduction.js";
import Demonstration from "./modules/demonstration.js";
import Explanation from "./modules/explanation.js";
import ConceptVideo from "./modules/concept-video.js";

const { Title, Paragraph } = Typography;
const { Header, Footer, Content } = Layout;

const defaultData = {
  borderRadius: "8px",
  colorPrimary: "#DD78FF",
};

const defaultContentStyle = {
  width: "75%",
  margin: "0 auto",
  minHeight: 280,
  background: "#ffffff",
  padding: "10px 10px 10px 10px",
};

const defaultHeaderFooterStyle = {
  width: "75%",
  margin: "0 auto",
  height: "auto",
  background: "#4C6080",
  lineHeight: "1",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "10px 10px 10px 10px",
};

class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "english",
    };
  }

  alertNotRealized = () => {
    alert("Ops...Coming soon!");
  };

  setLanguage = () => {
    let target_language = "english";
    if (this.state.language === "english") {
      target_language = "chinese";
    }
    this.setState({
      language: target_language,
    });
  };

  render() {
    const content = {
      english:
        "A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications",
      chinese: "老年人智能手机使用“引路人”",
    };

    return (
      <ConfigProvider theme={{ token: { ...defaultData } }}>
        <Layout>
          <Header style={defaultHeaderFooterStyle}>
            <Title level={1} style={{ color: "#ffffff" }}>
              <i>
                <b>iTutor</b>
              </i>
            </Title>
            <Title level={3} style={{ color: "#ffffff" }}>
              {content[this.state.language]}
              <br />
            </Title>
            <Title level={5} style={{ color: "#ffffff" }}>
              TJHCI-X
            </Title>
            <Paragraph>
              <Switch
                checkedChildren="中文"
                unCheckedChildren="English"
                defaultChecked
                onChange={() => this.setLanguage()}
              />
            </Paragraph>
            <Button
              type="primary"
              href="https://github.com/Motion115/iTutor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
              Github
            </Button>{" "}
            &nbsp;&nbsp;
            <Button type="primary" onClick={() => this.alertNotRealized()}>
              <FilePdfOutlined />
              Paper
            </Button>
            <br />
          </Header>

          <Content style={defaultContentStyle}>
            <Introduction language={this.state.language} />

            {<Demonstration language={this.state.language} />}

            <Explanation language={this.state.language} />

            {<ConceptVideo />}
          </Content>

          <Footer style={defaultHeaderFooterStyle}>
            <Paragraph style={{ color: "#ffffff" }}>
              Created by TJHCI-X ©2023 with{" "}
              <a
                href="https://ant.design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ant Design
              </a>
            </Paragraph>
          </Footer>
        </Layout>
      </ConfigProvider>
    );
  }
}

export default GlobalLayout;

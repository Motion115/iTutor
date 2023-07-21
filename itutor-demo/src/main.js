import React from "react";
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import { Row, Col } from "antd";
import { Button } from "antd";
import { GithubOutlined, FilePdfOutlined } from "@ant-design/icons";
import { Divider, Typography } from "antd";
import Introduction from "./modules/introduction.js";
import Demonstration from "./modules/demonstration.js";
import Explanation from "./modules/explanation.js";
import ConceptVideo from "./modules/concept-video.js";

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const defaultData = {
  borderRadius: "8px",
  colorPrimary: "#DD78FF",
};

const defaultContentStyle = {
  width: "90%",
  margin: "0 auto",
  minHeight: 280,
  background: "#ffffff",
  padding: "10px 10px 10px 10px",
};

const defaultHeaderFooterStyle = {
  width: "90%",
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
  alertNotRealized = () => {
    alert("Ops...Coming soon!");
  };

  render() {
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
              A Generative Tutorial System for Teaching the Elders to Use
              Smartphone Applications
            </Title>
            <Title level={5} style={{ color: "#ffffff" }}>
              TJHCI-X
            </Title>
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
            <Introduction />

            <Demonstration />

            <Explanation />

            <ConceptVideo />
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

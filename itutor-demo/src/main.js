import React from "react";
import { Layout, ConfigProvider, Dropdown, Space } from "antd";
import { Button } from "antd";
import {
  GithubOutlined,
  FilePdfOutlined,
  DownOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import Introduction from "./modules/introduction.js";
import Demonstration from "./modules/demonstration.js";
import Explanation from "./modules/explanation.js";
import ConceptVideo from "./modules/concept-video.js";

const { Title, Paragraph, Text } = Typography;
const { Header, Footer, Content } = Layout;

const defaultData = {
  borderRadius: "8px",
  colorPrimary: "#7E7ED8",
  fontFamily:
    "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
  fontFamilyCode: "Maven Pro",
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
  background: "#3D4F88",
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

  render() {
    const content = {
      english:
        "A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications",
      chinese: "老年人智能手机使用“引路人”",
    };

    const items = [
      {
        key: "1",
        label: "English",
      },
      {
        key: "2",
        label: "中文",
      },
    ];

    return (
      <ConfigProvider
        theme={{
          token: { ...defaultData },
          components: {
            Typography: {
              titleMarginTop: "0.5em",
              titleMarginBottom: "0.3em",
            },
          },
        }}
      >
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
            <Title
              level={5}
              style={{
                color: "#ffffff",
                fontSize: "16px",
                padding: "0 0 10px 0",
              }}
            >
              Ruishi Zou, Zi Ye, Chen Ye
              <br />
              Tongji University, Shanghai, China
            </Title>
            <Paragraph>
              <Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ["1"],
                  onClick: ({ key }) => {
                    if (key === "1") {
                      this.setState({
                        language: "english",
                      });
                    } else {
                      this.setState({
                        language: "chinese",
                      });
                    }
                  },
                }}
              >
                <Button type="primary">
                  <Space>
                    <TranslationOutlined />
                    {this.state.language === "english" ? "English" : "中文"}
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
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
            <Button
              type="primary"
              href="https://doi.org/10.1145/3586182.3616663"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FilePdfOutlined />
              Paper
            </Button>
            <br />
          </Header>

          <Content style={defaultContentStyle}>
            <Introduction language={this.state.language} />

            <Demonstration language={this.state.language} />

            <Explanation language={this.state.language} />

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
            <Text style={{ color: "#ffffff" }}>
              Special thanks to <b>Liangliang Chen</b> and <b>Ruiyi Liu</b> for
              their assistance and participation in this project.
            </Text>
          </Footer>
        </Layout>
      </ConfigProvider>
    );
  }
}

export default GlobalLayout;

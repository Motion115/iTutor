import React from "react";
import { ConfigProvider, Layout, Space, Typography } from "antd";
import Routing from "./Routing";
import HeaderMenu from "./modules/header";
const { Content, Header, Footer } = Layout;
const { Paragraph, Text, Title } = Typography;

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#B3E5FC",
        colorBgLayout: "#ffffff",
        borderRadius: 4,
        fontSize: 16,
        fontFamily:
          "Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
      },
      components: {
        Layout: {
          headerBg: "#ffffff",
          headerPadding: 0,
          footerPadding: "50px 0px 50px 0px",
        },
        Menu: {
          itemBorderRadius: 12,
          subMenuItemBorderRadius: 6,
          horizontalItemBorderRadius: 8,
        },
      },
    }}
  >
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout style={{ width: "70%", padding: "1%", margin: "0 auto" }}>
        <Header>
          <HeaderMenu></HeaderMenu>
        </Header>
        <Routing></Routing>
        <Footer>
          <Text>Last updated: September 2023. All Rights Reserved.</Text>
          <br />
          <Text>
            Theme by{" "}
            <a
              href="https://github.com/Motion115/minimal-academic-folio/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Motion115.
            </a>
          </Text>
        </Footer>
      </Layout>
    </Space>
  </ConfigProvider>
);

export default App;

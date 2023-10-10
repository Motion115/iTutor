import React from "react";
import { Layout, Divider, Space, Typography } from "antd";
import ParallelLayout from "../modules/layout";
const { Paragraph, Text, Title } = Typography;
const { Content, Header, Footer } = Layout;

const Homepage: React.FC = () => (
  <Content id="About">
    {/* <Title level={4} id="Updates">
      Updates
    </Title> */}
    <Divider style={{ margin: "0 0 1% 0" }} />
    <ParallelLayout></ParallelLayout>

  </Content>
);

const HomepageInDom = (
  <div>
    <Homepage />
  </div>
);

export default HomepageInDom;

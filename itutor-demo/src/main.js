import React from 'react';
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import buttonStyle from './stylesheet.js';
import { LaptopOutlined, NotificationOutlined, UserOutlined, GithubOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import Introduction from './modules/introduction.js'
import InformationRetrievalModule from "./modules/ir-module.js"
import LLMModule from "./modules/llm-module.js"
import TranslationModule from "./modules/translation-module.js"

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const MODULE_SELECTOR = [
    {
        key: "1",
        icon: React.createElement(UserOutlined),
        label: "Metadata Retrieval",
        //children: [],
    },
    {
        key: "2",
        icon: React.createElement(LaptopOutlined),
        label: "Instruction Generation by LLMs",
    },
    {
        key: "3",
        icon: React.createElement(NotificationOutlined),
        label: "Instruction to Interface Translation",
    }
]

const defaultData = {
    borderRadius: 6,
    colorPrimary: '#76BE26',
};

const defaultContentStyle = {
    width: '90%',
    margin: '0 auto',
    minHeight: 280,
    background: "#ffffff",
    padding: '10px 10px 10px 10px',
}

class GlobalLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
        };
    }

    switchModule = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    conditionallyRenderModule = () => {
        switch (this.state.current) {
            case "1":
                return <InformationRetrievalModule />;
            case "2":
                return <LLMModule />;
            case "3":
                return <TranslationModule />;
            default:
                return <InformationRetrievalModule />;
        }
    }

    alertNotRealized = () => {
        alert("Paper");
    }

    render() {
        return (
            <ConfigProvider theme={{token: {...defaultData}}}>
                <Layout>
                    <Header
                        style={{
                            width: '100%',
                            margin: '0 auto',
                            minHeight: "180px",
                            height: "auto",
                            background: "#4C6080",
                            lineHeight: "1",
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '10px 10px 10px 10px',
                        }}
                    >
                        <Title level={2} style={{color: "#ffffff"}}>iTutor</Title>
                        <Title level={4} style={{color: "#ffffff"}}>A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications</Title>
                        <p>TJHCI-X</p>
                        <Button type='primary' href='https://github.com/Motion115/iTutor/' target="_blank" rel="noopener noreferrer"><GithubOutlined />Github</Button> &nbsp;&nbsp;
                        <Button type='primary' onClick={this.alertNotRealized}><FilePdfOutlined />Paper</Button>
                        <br />
                    </Header>

                    <Content style={defaultContentStyle}>
                        <Introduction />

                        <Menu
                            onClick={this.switchModule}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            items={MODULE_SELECTOR}
                            style={{ alignItems: "center" }}
                        />
                        {this.conditionallyRenderModule()}
                    </Content>

                    <Footer
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#4C6080',
                        }}
                    >
                        Created by TJHCI-X ©2023 with <a href="https://ant.design/" target='_blank' rel="noopener noreferrer">Ant Design</a>
                    </Footer>
                </Layout>

            </ConfigProvider>

        );
    }
}


export default GlobalLayout;
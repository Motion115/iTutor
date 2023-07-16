import React from 'react';
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from 'antd';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import buttonStyle from './stylesheet.js';
import { LaptopOutlined, NotificationOutlined, UserOutlined, GithubOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Divider, Typography } from 'antd';
import InformationRetrievalModule from "./modules/ir-module.js"
import LLMModule from "./modules/llm-module.js"
import TranslationModule from "./modules/translation-module.js"


const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

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

const headerStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '60px',
    color: '#fff',
    backgroundColor: '#CE95F5',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#7143A1',
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const defaultData = {
    borderRadius: 6,
    colorPrimary: '#76BE26',
};

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
        const colorBgContainer = '#fff';


        return (
            <ConfigProvider theme={{token: {...defaultData}}}>
                <Layout>
                    <Header
                        style={{
                            width: '100%',
                            margin: '0 auto',
                            minHeight: "180px",
                            height: "auto",
                            background: "#494d55",
                            lineHeight: '30px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                            padding: '0px 0px 10px 0px',
                        }}
                    >
                        <Title level={1}>iTutor</Title>
                        <p>A Generative Tutorial System for Teaching the Elders to Use Smartphone Applications</p>
                        <p>TJHCI-X</p>
                        <Button type='primary' href='https://github.com/Motion115/iTutor/' target="_blank" rel="noopener noreferrer"><GithubOutlined />Github</Button> &nbsp;&nbsp;
                        <Button type='primary' onClick={this.alertNotRealized}><FilePdfOutlined />Paper</Button>
                        <br />
                    </Header>

                    <br />
                    <br />

                    <Content
                        style={{
                            width: '80%',
                            margin: '0 auto',
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >

                        <Menu
                            onClick={this.switchModule}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            items={MODULE_SELECTOR}
                            style={{ alignItems: "center" }}
                        />
                        <br />
                        {this.conditionallyRenderModule()}
                    </Content>

                    <Footer
                        style={{
                            textAlign: 'center',
                            backgroundColor: '#CCB0FF',
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
import React from 'react';
import { Typography } from 'antd';
import { Layout, Menu } from 'antd'
import { ScanOutlined, DeliveredProcedureOutlined, TranslationOutlined } from '@ant-design/icons';
import InformationRetrievalModule from "./iTutor-submodules/ir-module.js"
import LLMModule from "./iTutor-submodules/llm-module.js"
import TranslationModule from "./iTutor-submodules/translation-module.js" 

const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

const MODULE_SELECTOR = [
    {
        key: "1",
        icon: <ScanOutlined />,
        label: "Metadata Retrieval",
        //children: [],
    },
    {
        key: "2",
        icon: <DeliveredProcedureOutlined />,
        label: "Instruction Generation by LLMs",
    },
    {
        key: "3",
        icon: <TranslationOutlined />,
        label: "Tutorial Interface Generation",
    }
]

export default class Explaination extends React.Component {
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

    render() {
        return (
            <div>
                <Content style={{ padding: "10px 10px 10px 10px" }}>
                    <Title level={3} style={{ textAlign: 'center', justifyContent: 'center' }}>
                        <b>Explaination</b>
                    </Title>
                    <Menu
                        onClick={this.switchModule}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                        items={MODULE_SELECTOR}
                        style={{ alignItems: "center", textAlign: 'center', justifyContent: 'center', width: "60%", margin: "0 auto" }}
                    />
                    {this.conditionallyRenderModule()}

                </Content>
            </div>
        );
    }
}
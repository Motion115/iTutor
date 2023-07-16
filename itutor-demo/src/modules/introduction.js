import React from 'react';
import teaser_pic from '../assets/teaser-v3.jpg';
import { Typography } from 'antd';
import { Layout, Image } from 'antd'
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class InformationRetrievalModule extends React.Component {

    render() {
        return (
            <div>
                <Content style={{padding: "10px 10px 10px 10px"}}>
                    <Title level={3} style={{ textAlign: 'center', justifyContent: 'center' }}>
                        Welcome to <b>iTutor</b>
                    </Title>

                    <Image
                        src={teaser_pic}
                        style={{ width: "80%", height: "auto", display: 'block', margin: 'auto' }}
                    />

                    <Paragraph style={{fontSize: "16px"}}>
                        We present iTutor, a generative tutorial system for promoting elders' smartphone use proficiency. iTutor is unique because it can dynamically generate tutorials based on current operation goals and UI context, which we achieved through leveraging prompt engineering to large language models (LLMs). Early-stage evaluations showed great potential for this approach. We conclude by providing the roadmap for further development and discussing the potential challenges.
                    </Paragraph>
                </Content>
            </div>
        );
    }
}
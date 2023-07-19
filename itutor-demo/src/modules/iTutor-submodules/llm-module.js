import React from 'react';
import { Typography, Image, Layout, Row, Col } from 'antd';
import ContentBlock from './helper';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
    render() {
        return (
            <div>
                <Content style={{ padding: "10px 10px 10px 10px" }}>
                    <Title>Prompt</Title>
                    <Paragraph copyable>
                        <pre>
                            Your task is to act like a tutor, where you need to instruct a user how to operate a given application and explain what this operation does. The explanation should be around 50 words, and no longer than 100 words.
                            <br />
                            You will be provided with the following metadata for making your decision:
                            <br />
                            1. The general purpose of the page is provided in between two exclamation marks. the purpose is one of the following 20 classes: bare, dialer, camera, chat, editor, form, gallery, list, login, maps, mediaplayer, menu, modal, news, other, profile, search, settings, terms, and tutorial.
                            <br />
                            2. The UI components of the page are provided in JSON format and rounded by the dollar sign. All the possible types of UI components are Button, Input, Icon, Checkbox, Selector, Switch, Container, Tag, Menu. Each of the types is a possible attribute in the JSON.
                            <br />
                            3. The command from the user will be provided in triple backticks.
                            <br />
                            You should reply with JSON source code. You should provide 4 attributes:
                            <br />
                            1. "Command": repeat the command of the user.
                            <br />
                            2. "Operation": a list, including the first next two steps of operation.
                            <br />
                            3. "Key": a list. Index 0 is the attribute in the UI component JSON, and index 1 should the annotation of the element.
                            <br />
                            4. "Explanation": the explanation of the proposed operation.
                            <br />
                            The metadata is as follows:
                            <br />
                            !(UI type)!
                            <br />
                            $(UI context)$
                            <br />
                            ```(Your command)```
                        </pre>
                    </Paragraph>


                </Content>

            </div>
        );
    }
}
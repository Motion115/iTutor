import React from 'react';
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default class InformationRetrievalModule extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Typography>
                <Title>LLMs</Title>
            </Typography>

        );
    }
}
import React from 'react';
import { Typography, Row, Col } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export default class ContentBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Col span={4}>
                        <Paragraph style={{ fontSize: "18px", fontStyle: "oblique", fontWeight: "bold" }}>
                            {this.props.title}
                        </Paragraph>
                    </Col>
                    <Col span={8}>
                        <Paragraph style={{ fontSize: "14px", fontStyle: "oblique" }}>
                            {this.props.description}
                        </Paragraph>
                    </Col>
                    <Col span={12}>
                        {this.props.media}
                    </Col>
                </Row>

            </div>

        );
    }
}
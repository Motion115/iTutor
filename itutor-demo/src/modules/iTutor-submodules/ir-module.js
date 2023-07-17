import React from 'react';
import { Typography, Image, Layout, Row, Col } from 'antd';
import ui2vec_pic from '../../assets/ui2vec.png'
import uicomponent_pic from '../../assets/ui-component-classification.png'
import ContentBlock from './helper';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
const { Title, Paragraph, Text, Link } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
    openLink = (link) => {
        window.open(link, "_blank");
    }

    render() {
        return (
            <div>
                <Content style={{padding: "10px 10px 10px 10px"}}>
                    <ContentBlock
                        title="UI Page Purpose Classification"
                        description={<div>
                            Formulating it as a downstream task of the <a href='https://github.com/Motion115/UI2Vec' target="_blank" rel="noopener noreferrer">UI2Vec</a> embedding model.
                            We obtained 95% accuracy in classifying the Enrico dataset's 20 classes using UI2Vec's embeddings.
                            <br />
                            However, the Enrico dataset is relatively small and the UI images are slightly outdated (only up to 2017),
                            so further work on collecting new datasets and updating the UI2Vec model is needed.
                            </div>
                        }
                        media={
                            <Image
                                src={ui2vec_pic}
                                style={{ width: "80%", height: "auto", display: 'block', margin: 'auto' }}
                            />
                        }
                    />

                    <ContentBlock
                        title="UI Component Classification"
                        description={<div>
                            We propose using traditional computer vision techniques to extract UI components from UI images. 
                            After that, we run a classification task on each UI component and align it with the text recognized by OCR.
                            </div>
                        }
                        media={
                            <Image
                                src={uicomponent_pic}
                                style={{ width: "30%", height: "auto", display: 'block', margin: 'auto' }}
                            />
                        }
                    />

                    <ContentBlock
                        title="Voice Recognition"
                        description={<div>
                            iTutor uses voice recognition to convert the user's voice input to text. However, we do not include a separate module for this task, as it is readily available through mobile OS's APIs.
                        </div>
                        }
                        media={
                            <div>
                                <AndroidFilled style={{ height: "auto", display: 'block', margin: 'auto', fontSize: "30px" }} onClick={() => this.openLink("https://developer.android.com/reference/android/speech/SpeechRecognizer")}/>
                                <AppleFilled style={{ height: "auto", display: 'block', margin: 'auto', fontSize: "30px" }} onClick={() => this.openLink("https://developer.apple.com/documentation/speech")} />
                            </div>
                        }
                    />

                    
                </Content>

            </div>

        );
    }
}
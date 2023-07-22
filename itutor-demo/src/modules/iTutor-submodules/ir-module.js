import React from "react";
import { Image, Layout } from "antd";
import ui2vec_pic from "../../assets/ui2vec.png";
import uicomponent_pic from "../../assets/ui-component-classification.png";
import ContentBlock from "./helper";
import { AndroidFilled, AppleFilled } from "@ant-design/icons";
const { Content } = Layout;

export default class InformationRetrievalModule extends React.Component {
  openLink = (link) => {
    window.open(link, "_blank");
  };

  render() {
    const content = {
      english: {
        "ui-page-classification": (
          <div>
            Formulating it as a downstream task of the{" "}
            <a
              href="https://github.com/Motion115/UI2Vec"
              target="_blank"
              rel="noopener noreferrer"
            >
              UI2Vec
            </a>{" "}
            embedding model. We obtained 95% accuracy in classifying the Enrico
            dataset's 20 classes using UI2Vec's embeddings.
            <br />
            However, the Enrico dataset is relatively small and the UI images
            are slightly outdated (only up to 2017), so further work on
            collecting new datasets and updating the UI2Vec model is needed.
          </div>
        ),
        "ui-component-classification": (
          <div>
            We propose using traditional computer vision techniques to extract
            UI components from UI images. After that, we run a classification
            task on each UI component and align it with the text recognized by
            OCR.
          </div>
        ),
        "voice-recognition": (
          <div>
            iTutor uses voice recognition to convert the user's voice input to
            text. However, we do not include a separate module for this task, as
            it is readily available through mobile OS's APIs.
          </div>
        ),
      },
      chinese: {
        "ui-page-classification": (
          <div>
            将其视为
            <a
              href="https://github.com/Motion115/UI2Vec"
              target="_blank"
              rel="noopener noreferrer"
            >
              UI2Vec
            </a>
            嵌入模型的下游任务。我们使用UI2Vec生成的嵌入向量对Enrico数据集的20个类别进行分类，得到了高达95%的分类准确率。
            <br />
            然而，Enrico 数据集相对较小，UI 图像不能反映最新的UI设计风格（仅到
            2017 年）。因此，我们还需要进一步收集新数据集和更新 UI2Vec 模型。
          </div>
        ),
        "ui-component-classification": (
          <div>
            我们使用传统的计算机视觉技术（即边缘检测和划分）从 UI 图像中提取 UI
            组件。 之后，我们对每个 UI 组件运行分类任务，并将其与 OCR
            识别的文本对齐，补全组件信息。
          </div>
        ),
        "voice-recognition": (
          <div>
            iTutor 使用语音识别将用户的语音输入转换为文本。
            但是，由于当前各操作系统中均包含语音输入API，因此，我们不会为此任务提供单独的模块，可以直接调用现有接口实现。
          </div>
        ),
      },
    };

    const titles = {
      english: {
        "ui-page-classification": "UI Page Classification",
        "ui-component-classification": "UI Component Classification",
        "voice-recognition": "Voice Recognition",
      },
      chinese: {
        "ui-page-classification": "UI 页面分类",
        "ui-component-classification": "UI 组件分类",
        "voice-recognition": "语音识别",
      },
    };
    return (
      <div>
        <Content style={{ padding: "10px 10px 10px 10px" }}>
          <ContentBlock
            title={titles[this.props.language]["ui-page-classification"]}
            description={content[this.props.language]["ui-page-classification"]}
            media={
              <Image
                src={ui2vec_pic}
                style={{
                  width: "80%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
              />
            }
          />

          <ContentBlock
            title={titles[this.props.language]["ui-component-classification"]}
            description={
              content[this.props.language]["ui-component-classification"]
            }
            media={
              <Image
                src={uicomponent_pic}
                style={{
                  width: "30%",
                  height: "auto",
                  display: "block",
                  margin: "auto",
                }}
              />
            }
          />

          <ContentBlock
            title={titles[this.props.language]["voice-recognition"]}
            description={content[this.props.language]["voice-recognition"]}
            media={
              <div>
                <AndroidFilled
                  style={{
                    height: "auto",
                    display: "block",
                    margin: "auto",
                    fontSize: "30px",
                  }}
                  onClick={() =>
                    this.openLink(
                      "https://developer.android.com/reference/android/speech/SpeechRecognizer"
                    )
                  }
                />
                <AppleFilled
                  style={{
                    height: "auto",
                    display: "block",
                    margin: "auto",
                    fontSize: "30px",
                  }}
                  onClick={() =>
                    this.openLink(
                      "https://developer.apple.com/documentation/speech"
                    )
                  }
                />
              </div>
            }
          />
        </Content>
      </div>
    );
  }
}

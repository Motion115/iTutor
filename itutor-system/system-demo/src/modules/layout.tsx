import React, { useRef, useState } from "react";
import { Row, Col, Space, Button, Divider, Modal, Spin } from "antd";
import { Input, Typography, Card, Tag, Switch} from "antd";
import axios from "axios";
import FileUploader from "./load_file";
import ReactJson from "react-json-view";
import  { EnterOutlined, UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Title, Text } = Typography;

interface ResponseData {
  raw_data: string;
}

const ParallelLayout: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const [inputMetadata, setInputMetadata] = useState("{}");

  const loadEnricoStyleSpecification = async (file: File) => {
    try {
      const response = await axios.post<ResponseData>(
        "http://127.0.0.1:5000/treeify",
        {
          raw_data: file,
        }
      );

      const responseData = response.data; // Parsed JSON response
      // jsonify responseData
      const response_string = JSON.stringify(responseData, null, 2);
      setInputMetadata(response_string);
      // Do something with the parsed response data
      // console.log(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [returnInfo, setReturnInfo] = useState("");
  const [requestType, setRequestType] = useState("");

  const [spinning, setSpinning] = useState(false);

  const callLanguageModels = async () => {
    if (inputText === "" || inputMetadata === "{}") {
      setIsModalOpen(true);
      return
    }
    try {
      setSpinning(true);
      setReturnInfo("");
      setRequestType("");
      const response = await axios.post<ResponseData>(
        "http://127.0.0.1:5000/callLLM",
        {
          specification: JSON.stringify(inputMetadata),
          command: inputText,
          isTutorial: isTutorialMode,
        }
      );

      const responseData = response.data; // Parsed JSON response
      // set responseString and commandType
      const responseJSON = JSON.parse(JSON.stringify(responseData, null, 2));
      const llm_suggestion = responseJSON["llm_suggestion"];
      const prompt_type = responseJSON["prompt_type"];
      setReturnInfo(llm_suggestion);
      setRequestType(prompt_type);
      // Do something with the parsed response data
      // console.log(responseData);
      setSpinning(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFileUpload = (file: File) => {
    // Do something with the uploaded file
    // console.log(file);
    loadEnricoStyleSpecification(file);
    // return file
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => setIsModalOpen(false);

  const [isTutorialMode, setIsTutorialMode] = useState(false);
  const onTutorialModeChange = () => {
    setIsTutorialMode(!isTutorialMode);
  }

  return (
    <>
      {/* <Button onClick={showState}>test</Button> */}
      <Title level={4}>Input</Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <Row>
        <Col span={12}>
          <Space direction="vertical">
            <Text>Upload a UI specification file from the Enrico dataset.</Text>
            <FileUploader onFileUpload={handleFileUpload}></FileUploader>
            <ReactJson
              src={JSON.parse(inputMetadata)}
              collapsed={1}
              indentWidth={2}
              displayDataTypes={false}
              enableClipboard={false}
              iconStyle="circle"
              collapseStringsAfterLength={20}
              style={{ fontFamily: "Maven Pro" }}
            ></ReactJson>
          </Space>
        </Col>
        <Col span={12}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div>
              <Text>Tutorial mode: </Text>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                onChange={onTutorialModeChange}
              />
            </div>
            <TextArea
              showCount
              maxLength={300}
              style={{ height: 120, resize: "none" }}
              onChange={onTextChange}
            />
            <div>
              <Button onClick={callLanguageModels}>
                Generate <EnterOutlined />
              </Button>
              {spinning ? <Spin size="default" /> : null}
            </div>
          </Space>
        </Col>
      </Row>

      <br />
      <Title level={4}>Response</Title>
      <Divider style={{ margin: "0 0 1% 0" }} />
      <Space direction="vertical" style={{ width: "100%" }}>
        <div>
          <Text>Command type: </Text>
          <Tag color="magenta">
            <b>{requestType}</b>
          </Tag>
        </div>

        <Card hoverable={true}>
          {requestType === "tutorial" ? (
            <ReactJson
              src={JSON.parse(returnInfo)}
              collapsed={1}
              indentWidth={2}
              displayDataTypes={false}
              enableClipboard={false}
              iconStyle="circle"
              style={{ fontFamily: "Maven Pro" }}
            />
          ) : (
            <Text>{returnInfo}</Text>
          )}
        </Card>
      </Space>

      <Modal
        title="Alert"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        Empty input!
      </Modal>
    </>
  );
};

export default ParallelLayout;

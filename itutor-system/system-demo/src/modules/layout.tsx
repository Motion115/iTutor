import React, { useRef, useState } from "react";
import { Row, Col, Space, Button, Collapse } from "antd";
import { Input, Typography } from "antd";
import axios from "axios";
import FileUploader from "./load_file";
import items from "../drafts/menu";
import ReactJson from "react-json-view";
const { TextArea } = Input;
const { Title, Text } = Typography;

interface ResponseData {
  raw_data: string;
}

const ParallelLayout: React.FC = () => {
  const [inputText, setInputText] = useState("");

  const onTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const callLanguageModels = () => {
    console.log("purpose classification");
    console.log("prompt generation");
  };

  const handleFileUpload = (file: File) => {
    // Do something with the uploaded file
    // console.log(file);
    loadEnricoStyleSpecification(file);
    // return file
  };

  const showState = () => {
    console.log(inputMetadata);
  };

  return (
    <>
      <Button onClick={showState}>dd</Button>
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
              style={{ fontFamily: "Maven Pro"}}

            ></ReactJson>
          </Space>
        </Col>
        <Col span={12}>
          <TextArea
            showCount
            maxLength={100}
            style={{ height: 120, resize: "none" }}
            onChange={onTextChange}
          />
        </Col>
      </Row>

      <br />
      <Row>
        <Col span={24}>judged type of request</Col>
      </Row>
      <Row>
        <Col span={24}>response</Col>
      </Row>
    </>
  );
};

export default ParallelLayout;

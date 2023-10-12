import React, { useRef, useState } from "react";
import { Button } from "antd";
import { EnterOutlined, UploadOutlined } from "@ant-design/icons";

interface FileUploaderProps {
  onFileUpload: (jsonData: any) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileUpload }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | undefined>(undefined);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name); // Set the file name
      try {
        const jsonData = await parseJsonFile(file);
        onFileUpload(jsonData);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
      }
    }
  };

  const parseJsonFile = (file: File): Promise<any> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        try {
          const jsonData = JSON.parse(content);
          resolve(jsonData);
        } catch (parseError) {
          reject(parseError);
        }
      };
      reader.onerror = (event) => {
        reject(event.target?.error);
      };
      reader.readAsText(file);
    });
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Button onClick={handleUploadClick}>Upload <UploadOutlined /></Button>
      {fileName && <p>Uploaded file: {fileName}</p>}{" "}
      {/* Display the file name */}
    </div>
  );
};

export default FileUploader;

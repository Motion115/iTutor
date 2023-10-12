import type { MenuProps } from "antd";


const baseServerAddress = process.env.PUBLIC_URL;

const items: MenuProps["items"] = [
  {
    label: (
      <a href={baseServerAddress + "/"}>
        <div style={{ fontSize: "22px" }}>
          <b>iTutor | GLM</b>
        </div>
      </a>
    ),
    key: "Home",
  },
];

export default items;
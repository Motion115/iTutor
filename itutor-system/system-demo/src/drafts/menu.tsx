import type { MenuProps } from "antd";


const baseServerAddress = process.env.PUBLIC_URL;

const items: MenuProps["items"] = [
  {
    label: <a href={baseServerAddress + "/"}>Home</a>,
    key: "Home",
  },
];

export default items;
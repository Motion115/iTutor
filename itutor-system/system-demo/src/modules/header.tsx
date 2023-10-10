import React, { useState } from "react";
import { Affix } from "antd";
import type { MenuProps } from "antd";
import { Menu, Alert, Modal } from "antd";
import items from "../drafts/menu";

const HeaderMenu: React.FC = () => {
  const [current, setCurrent] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Affix>
        <Menu
          onClick={onClick}
          mode="horizontal"
          items={items}
        />
      </Affix>
    </>
  );
};

export default HeaderMenu;

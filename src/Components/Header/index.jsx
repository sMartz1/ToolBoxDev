import React from "react";
import "./index.scss";
import { Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useIPC } from "../../utils/IPC/Ipc";


export const Header = () => {
  const { Title } = Typography;
  const { close } = useIPC();

  return (
    <div className="AppHeader">
      <Title level={3}> Alchemist</Title>
      <Button
        type="primary"
        shape="circle"
        icon={<CloseOutlined />}
        onClick={close}
        size="small"
        danger
        className="closeButton"
      />
    </div>
  );
};

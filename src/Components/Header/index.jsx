import React from "react";
import "./index.scss";
import { Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useIPC } from "../../utils/IPC/Ipc";
import { useProfile } from "../../utils/hooks/useProfile";
export const Header = () => {
  const { Title } = Typography;
  const { close } = useIPC();
  const { profile } = useProfile();
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

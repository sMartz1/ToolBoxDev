import React from "react";
import "./index.scss";
import { Typography, Button } from "antd";
import { CloseOutlined, SettingOutlined } from "@ant-design/icons";
import { useIPC } from "../../utils/IPC/Ipc";

export const Header = ({ setIsSettingsOpen }) => {
    const { Title } = Typography;
    const { close } = useIPC();

    const handleOpenSettings = () => {
        setIsSettingsOpen(true);
    };

    return (
        <div className="AppHeader">
            <Title level={3}> Alchemist</Title>
            <Button
                type="primary"
                shape="circle"
                icon={<SettingOutlined />}
                size="small"
                onClick={handleOpenSettings}
                className="settingsButton"
            />
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

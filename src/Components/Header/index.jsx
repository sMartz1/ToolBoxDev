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
            <div className="button-group">
                <Button
                    type="primary"
                    shape="circle"
                    icon={<SettingOutlined />}
                    size="small"
                    onClick={handleOpenSettings}
                    rootClassName="settingsButton"
                />
                <Button
                    type="primary"
                    shape="circle"
                    icon={<CloseOutlined />}
                    onClick={close}
                    size="small"
                    danger
                    rootClassName="closeButton"
                />
            </div>
        </div>
    );
};

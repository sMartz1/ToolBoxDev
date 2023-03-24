import React from "react";
import { Button, List, Card } from "antd";
import {
    DeleteOutlined,
    SettingOutlined,
    UserOutlined,
    ChromeOutlined,
    PlusOutlined,
} from "@ant-design/icons";
export default function CustomListItem(props) {
    const { item } = props;
    const handleOpenSettings = () => {};
    const cardExtras = (
        <div className="card-options">
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
                icon={<DeleteOutlined />}
                size="small"
                onClick={handleOpenSettings}
                rootClassName="deleteButton"
                danger
            />
        </div>
    );
    if (item.title === "new") {
        return (
            <List.Item>
                <Card>
                    <div className="list-card-new-container">
                        <Button type="primary" icon={<PlusOutlined />} />
                    </div>
                </Card>
            </List.Item>
        );
    } else {
        return (
            <List.Item>
                <Card title={item.title} extra={cardExtras}>
                    <div className="list-card-content-container">
                        <Button type="primary" icon={<UserOutlined />}>
                            Users
                        </Button>
                        <Button type="primary" icon={<ChromeOutlined />} />
                    </div>
                </Card>
            </List.Item>
        );
    }
}

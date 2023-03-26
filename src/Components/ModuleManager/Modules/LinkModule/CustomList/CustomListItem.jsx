import React, { useState } from "react";
import { Button, List, Card, message, Popconfirm } from "antd";
import {
    DeleteOutlined,
    SettingOutlined,
    UserOutlined,
    ChromeOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import TypeCodes from "../../../../../utils/Typecodes/ModalTypes";
import CustomModal from "../../../../CustomModal";
import { useIPC } from "../../../../../utils/IPC/Ipc";
export default function CustomListItem(props) {
    const { item, updateData, linkIndex, envIndex } = props;
    const [messageApi, contextHolder] = message.useMessage();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { copyUsers } = useIPC();

    const handleOpenSettings = () => {
        setIsModalOpen(true);
    };

    const handleDeleteItem = () => {
        updateData(TypeCodes.removeLink, null, [envIndex, linkIndex]);
        messageApi.open({
            type: "success",
            content: "Link removed!",
            duration: 3,
        });
    };

    const handleUser = async () => {
        await copyUsers([item.user.username, item.user.password]);
        messageApi.open({
            type: "success",
            content: "User and password copied into the clipboard!",
            duration: 3,
        });
    };
    const text = "Are you sure to delete this link?";

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
            <Popconfirm
                placement="topLeft"
                title={text}
                onConfirm={handleDeleteItem}
                okText="Yes"
                cancelText="No"
            >
                <Button
                    type="primary"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    size="small"
                    rootClassName="deleteButton"
                    danger
                />
            </Popconfirm>
            <CustomModal
                data={item}
                setIsModalOpen={setIsModalOpen}
                isModalOpen={isModalOpen}
                updateData={updateData}
                linkIndex={linkIndex}
                envIndex={envIndex}
                isEdit={true}
            />
        </div>
    );
    if (item.title === "new") {
        return (
            <List.Item>
                <Card>
                    <div className="list-card-new-container">
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            onClick={handleOpenSettings}
                        />
                        <CustomModal
                            data={item}
                            setIsModalOpen={setIsModalOpen}
                            isModalOpen={isModalOpen}
                            updateData={updateData}
                            linkIndex={linkIndex}
                            envIndex={envIndex}
                        />
                    </div>
                </Card>
            </List.Item>
        );
    } else {
        return (
            <List.Item>
                {contextHolder}
                <Card title={item.title} extra={cardExtras}>
                    <div className="list-card-content-container">
                        <Button
                            type="primary"
                            icon={<UserOutlined />}
                            onClick={handleUser}
                        >
                            Users
                        </Button>
                        <Button type="primary" icon={<ChromeOutlined />} />
                    </div>
                </Card>
            </List.Item>
        );
    }
}

import React, { useState } from "react";
import CustomListItem from "./CustomListItem";
import TypeCodes from "../../../../../utils/Typecodes/ModalTypes";
import CustomModal from "../../../../CustomModal";
import _ from "lodash";
import { Button, List, Card, message, Popconfirm } from "antd";
import {
    DeleteOutlined,
    SettingOutlined,
    PlusOutlined,
} from "@ant-design/icons";
import "./customList.scss";

const addNewElement = (d) => {
    let tempData = [...d];
    tempData.push({ title: "new" });
    return tempData;
};

const ListRenderer = (props) => {
    const { data, envIndex, updateData } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleOpenSettings = () => {
        setIsModalOpen(true);
    };

    const handleDeleteItem = () => {
        updateData(TypeCodes.removeEnvironment, null, [envIndex]);
        messageApi.open({
            type: "success",
            content: "Environment removed!",
            duration: 3,
        });
    };

    const text = "Are you sure to delete this environment?";

    if (data.title === "new") {
        return (
            <Card rootClassName="card-new-environment">
                <div className="list-card-new-section">
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={handleOpenSettings}
                    />
                </div>
                <CustomModal
                    data={data}
                    setIsModalOpen={setIsModalOpen}
                    isModalOpen={isModalOpen}
                    updateData={updateData}
                    envIndex={envIndex}
                    isEnvironmentModal={true}
                />
            </Card>
        );
    } else {
        return (
            <List
                size="small"
                grid={{ gutter: 9, column: 3 }}
                header={
                    <div className="list-header">
                        {contextHolder}
                        <h2>{data.title}</h2>
                        <div className="environment-options">
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<SettingOutlined />}
                                size="small"
                                onClick={handleOpenSettings}
                                rootClassName="settingsButton"
                            />
                            <Popconfirm
                                placement="Left"
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
                                data={data}
                                setIsModalOpen={setIsModalOpen}
                                isModalOpen={isModalOpen}
                                updateData={updateData}
                                envIndex={envIndex}
                                isEdit={true}
                                isEnvironmentModal={true}
                            />
                        </div>
                    </div>
                }
                bordered
                dataSource={addNewElement(data.links)}
                rootClassName="list-link-container"
                renderItem={(item, i) => (
                    <CustomListItem
                        item={item}
                        envIndex={envIndex}
                        linkIndex={i}
                        updateData={updateData}
                    />
                )}
            />
        );
    }
};

export default function CustomList(props) {
    const { data, updateData } = props;
    console.log(data);
    return (
        <>
            {addNewElement(data).map((list, i) => (
                <ListRenderer
                    data={list}
                    envIndex={i}
                    updateData={updateData}
                />
            ))}
        </>
    );
}

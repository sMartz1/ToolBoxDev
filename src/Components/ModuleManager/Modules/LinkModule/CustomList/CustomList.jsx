import React from "react";
import CustomListItem from "./CustomListItem";
import _ from "lodash";
import { Button, List, Card } from "antd";
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

    const handleOpenSettings = () => {};
    const listHeader = (title) => {
        return (
            <div className="list-header">
                <h2>{title}</h2>
                <div className="environment-options">
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
            </div>
        );
    };

    if (data.title === "new") {
        return (
            <Card rootClassName="card-new-environment">
                <div className="list-card-new-section">
                    <Button type="primary" icon={<PlusOutlined />} />
                </div>
            </Card>
        );
    } else {
        return (
            <List
                size="small"
                grid={{ gutter: 9, column: 3 }}
                header={listHeader(data.title)}
                bordered
                dataSource={addNewElement(data.links)}
                rootClassName="list-link-container"
                renderItem={(item, i) => (
                    <CustomListItem item={item} envIndex={envIndex} linkIndex={i} updateData={updateData} />
                )}
            />
        );
    }
};

export default function CustomList(props) {
    const { data, updateData } = props;

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

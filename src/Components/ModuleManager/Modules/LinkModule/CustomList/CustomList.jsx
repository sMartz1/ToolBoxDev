import React from "react";
import CustomListItem from "./CustomListItem";
import { Button, List, Card } from "antd";
import {
    PlusOutlined,
} from "@ant-design/icons";
import "./customList.scss";

const addNewElement = (d) => {
    let tempData = [...d];
    tempData.push({ title: "new" });
    return tempData;
};

const ListRenderer = (props) => {
    const { data } = props;
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
                header={<h2>{data.title}</h2>}
                bordered
                dataSource={addNewElement(data.links)}
                rootClassName="list-link-container"
                renderItem={(item) => <CustomListItem item={item} />}
            />
        );
    }
};

export default function CustomList(props) {
    const { data } = props;

    return (
        <>
            {addNewElement(data).map((list) => (
                <ListRenderer data={list} />
            ))}
        </>
    );
}

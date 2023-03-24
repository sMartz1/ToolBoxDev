import React from "react";
import CustomListItem from "./CustomListItem";
import { Button, List } from "antd";
import "./customList.scss"

    const ListRenderer = (props)=>{
    const { data } = props;
    return  <List
            size="small"
            grid={{gutter: 9, column: 3}}
            header={<h2>{data.title}</h2>}
            bordered
            dataSource={data.links}
            rootClassName="list-link-container"
            renderItem={(item) => <CustomListItem item={item} />}
        />
    
}

export default function CustomList(props) {
    const { data } = props;
   

    return (
        <>
            {data.map((list) => (
                <ListRenderer data={list} />
            ))}
        </>
    );
}

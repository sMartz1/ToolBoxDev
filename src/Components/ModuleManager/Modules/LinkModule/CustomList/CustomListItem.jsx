import React from "react";
import { Button, List, Card } from "antd";
export default function CustomListItem(props) {     
        const { item } = props;

    return <List.Item><Card title={item.title}>Card content</Card></List.Item>;
}

import React from "react";
import { Card, Button } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import "./index.scss";

export default function ModuleCard({ title, children, onClick }) {
  return (
    <Card title={title} style={{ width: "80%" }}>
      <div className="cardContent">
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<CaretUpOutlined />}
          onClick={onClick}
        />
        {children}
      </div>
    </Card>
  );
}

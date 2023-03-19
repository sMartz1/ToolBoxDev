import { Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import React from "react";
import "./ComponentRenderer.scss";
export default function ComponentRenderer({
  children,
  isSelected,
  setSelectedModule,
}) {
  return (
    <div className="module-container">
      {isSelected ? (
        <Button
          type="primary"
          onClick={() => setSelectedModule(-1)}
          icon={<StepBackwardOutlined />}
        />
      ) : null}
      {children}
    </div>
  );
}

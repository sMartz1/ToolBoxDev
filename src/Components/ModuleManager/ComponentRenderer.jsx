import { Button } from "antd";
import { StepBackwardOutlined } from "@ant-design/icons";
import React, {useState , Children , isValidElement , cloneElement } from "react";
import "./ComponentRenderer.scss";
export default function ComponentRenderer({
  children,
  isSelected,
  setSelectedModule,
}) {
  const [buttonDisabled,setButtonDisabled] = useState(false);

  //We add props to the child component
  const componentWithProps = Children.map(children,(child)=>{
    if(!isValidElement(child))return null

    return cloneElement(child,{
      ...child.props,
      setButtonDisabled
    })
  })

  
  return (
    <div className={isSelected?"module-container-full":"module-container"}>
      {isSelected ? (
        <Button
          rootClassName="back-button"
          type="primary"
          onClick={() => setSelectedModule(-1)}
          icon={<StepBackwardOutlined />}
          disabled={buttonDisabled}
          danger
        />
      ) : null}
      {componentWithProps}
    </div>
  );
}

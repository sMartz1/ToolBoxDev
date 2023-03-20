import React, { useState, useEffect } from "react";
import ModuleCard from "../ModuleCard";
import { Input, Button } from "antd";
const { TextArea } = Input;
const title = "Navi Module";
export const NaviModule = (props) => {
    const { isSelected, setSelectedModule } = props;
    const [inputValue, setInputValue] = useState("");

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSend = () => {
        console.log(inputValue);
    };

    if (isSelected) {
        return (
            <div className="navi-container">
                Navy Module
                <TextArea rows={4} onChange={inputChange} value={inputValue} />
                <Button type="dashed" ghost onClick={handleSend}>
                    Search
                </Button>
            </div>
        );
    } else {
        return <ModuleCard title={title} onClick={setSelectedModule} />;
    }
};

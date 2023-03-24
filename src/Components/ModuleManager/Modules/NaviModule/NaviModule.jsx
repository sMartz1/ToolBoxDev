import React, { useState, useEffect, useCallback } from "react";
import { useIPC } from "../../../../utils/IPC/Ipc";
import ModuleCard from "../ModuleCard";
import { Input, Button } from "antd";
const { TextArea } = Input;
const title = "Navi Module";
export const NaviModule = (props) => {
    const { isSelected, setSelectedModule } = props;
    const [inputValue, setInputValue] = useState("");
    const [answer, setAnswer] = useState(null);
    const { sendMessage } = useIPC();

    const inputChange = (e) => {
        setInputValue(e.target.value);
    };
    const msg = new SpeechSynthesisUtterance()
    

    const handleSend = async () => {
        const response = await sendMessage(inputValue);
        msg.text = response[0].message.content
        window.speechSynthesis.speak(msg)
        setAnswer(response[0].message.content);
        setInputValue("")
    };
    console.log("answer",answer)
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

import React, { useEffect, useState } from "react";
import { useIPC } from "../../../../utils/IPC/Ipc";
import CustomList from "./CustomList/CustomList";
import "./index.scss";
import ModuleCard from "../ModuleCard";

const title = "Link Module";

export const LinkModule = (props) => {
    const { isSelected, setSelectedModule, setButtonDisabled } = props;
    const { openLink, getEnvironmentData } = useIPC();

    const [data,setData] = useState([]);

    useEffect(() => {
        getEnvironmentData().then(d=>{
            console.log("data de vuelta ",d)
            setData(d)
        })
    }, []);

    const handleStart = async () => {
        const response = await openLink(
            "https://stackoverflow.com/questions/51130743/how-to-open-links-in-default-browser-using-electron"
        );
        console.log("Se ha llamado? ", response);
    };

    if (isSelected) {
        return (
            <div className="link-module-container">
                <CustomList data={data} />
            </div>
        );
    } else {
        return <ModuleCard title={title} onClick={setSelectedModule} />;
    }
};

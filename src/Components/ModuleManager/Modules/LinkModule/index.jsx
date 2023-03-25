import React, { useEffect, useState } from "react";
import { useIPC } from "../../../../utils/IPC/Ipc";
import CustomList from "./CustomList/CustomList";
import "./index.scss";
import ModuleCard from "../ModuleCard";
import ModalTypes from "../../../../utils/Typecodes/ModalTypes";

const title = "Link Module";

export const LinkModule = (props) => {
    const { isSelected, setSelectedModule, setButtonDisabled } = props;
    const { openLink, getEnvironmentData, updateEnvironmentData } = useIPC();

    const [data, setData] = useState([]);

    useEffect(() => {
        getEnvironmentData().then((d) => {
            console.log("data de vuelta ", d);
            setData(d);
        });
    }, []);

    const updateData = (updateType, value, path) => {
        console.log(data[path[0]]);
        let tempData = [...data];
        // New link
        if (ModalTypes.newLink === updateType) {
            tempData[path[0]].links.push(value);
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }
        //RenoveLink
        if (ModalTypes.removeLink === updateType) {
            tempData[path[0]].links.splice(path[1], 1);
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }
        //UpdateLink
        if (ModalTypes.modifyLink === updateType) {
            tempData[path[0]].links[path[1]] = value;
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }

        //New environment
        if (ModalTypes.newEnvironment === updateType) {
            tempData.push(value);
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }
        //Remove environment
        if (ModalTypes.removeEnvironment === updateType) {
            console.log("LLEGA", tempData[path[0]]);
            tempData.splice(path[0], 1);
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }
        //Update environment
        if (ModalTypes.modifyEnvironment === updateType) {
            tempData[path[0]] = value;
            updateEnvironmentData(tempData).then((d) => {
                setData(d);
            });
            return;
        }
    };

    if (isSelected) {
        return (
            <div className="link-module-container">
                <CustomList updateData={updateData} data={data} />
            </div>
        );
    } else {
        return <ModuleCard title={title} onClick={setSelectedModule} />;
    }
};

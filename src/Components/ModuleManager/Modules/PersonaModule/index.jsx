import React, { useEffect, useState } from "react";

import { Button } from "antd";
import { useIPC } from "../../../../utils/IPC/Ipc";
import { RocketOutlined } from "@ant-design/icons";
import "./index.scss";
import ModuleCard from "../ModuleCard";
import { useCallback } from "react";
import ContentComponent from "./ContentComponent/ContentComponent";

const title = "Persona";

export const PersonaModule = (props) => {
    const { getPersona } = useIPC();
    const { isSelected, setSelectedModule, setCustomCssClass } = props;
    const [personaData, setPersonaData] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const fetchPersonaData = useCallback(async () => {
        const data = await getPersona();
        setPersonaData(data);
        setSelectedDay(0);
    }, [getPersona]);
    useEffect(() => {
        if (!isSelected) return;
        fetchPersonaData();
        document.querySelector(".App").classList.add("customBG");
        setCustomCssClass("customBG");
    }, []);

    const formateDate = (date) => {
        var diaMes = date.match(/([a-zA-Z]+)\s(\d+)(st|nd|rd|th)/);
        var mes = diaMes[1];
        var dia = diaMes[2];

        // Convierte el mes a su número correspondiente
        switch (mes) {
            case "January":
                mes = "01";
                break;
            case "February":
                mes = "02";
                break;
            case "March":
                mes = "03";
                break;
            case "April":
                mes = "04";
                break;
            case "May":
                mes = "05";
                break;
            case "June":
                mes = "06";
                break;
            case "July":
                mes = "07";
                break;
            case "August":
                mes = "08";
                break;
            case "September":
                mes = "09";
                break;
            case "October":
                mes = "10";
                break;
            case "November":
                mes = "11";
                break;
            case "December":
                mes = "12";
                break;
        }

        dia = ("0" + dia).slice(-2);

        return mes + "/" + dia;
    };

    const handleNextDay = (input) => {
        setSelectedDay(selectedDay + input);
    };
    if (isSelected && personaData !== null) {
        return (
            <div className="personaModule">
                <div className="personaTitle">PERSONA 4 GUIDE!</div>
                <div className="currentDay">
                    <h2>{formateDate(personaData[selectedDay].date)}</h2>
                </div>
                <ContentComponent currentDay={personaData[selectedDay]} />
                <div className="nextDayButton" onClick={()=>handleNextDay(1)}>
                    {">"}
                </div>
                {selectedDay > 0 ? (
                    <div className="backDayButton" onClick={()=>handleNextDay(-1)}>
                        {"<"}
                    </div>
                ) : null}
            </div>
        );
    } else {
        return <ModuleCard title={title} onClick={setSelectedModule} />;
    }
};

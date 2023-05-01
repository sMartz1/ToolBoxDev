import React from "react";
import "./ContentComponent.scss";
import personaTypecodes from "../../../../../utils/Typecodes/personaTypes";
import DayStepComponent from "./DayStepComponent";
export default function ContentComponent({ currentDay }) {
    console.log("Day :", currentDay);
    const handleRenderDaySteps = () => {
        let finalRenderArr = [];
        for (let property in currentDay) {
            if (personaTypecodes.dayStep.checkIfIsDayStep(property)) {
                finalRenderArr.push(
                    <DayStepComponent
                        title={property}
                        step={currentDay[property]}
                    />
                );
            }
        }

        return finalRenderArr;
    };
    return (
        <div className="contentContainer">
            {handleRenderDaySteps().map((e) => e)}
        </div>
    );
}

import React from "react";
import "./DayStepComponent.scss";

export default function DayStepComponent({ step, title }) {
    return (
        <div className="dayStep">
            <div className="stepTitle">{title}</div>
            <div className="stepContent">
                {step.map(e=>e)}
            </div>
        </div>
    );
}

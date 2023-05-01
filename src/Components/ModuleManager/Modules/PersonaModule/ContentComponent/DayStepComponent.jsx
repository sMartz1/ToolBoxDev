import React from "react";
import "./DayStepComponent.scss";

export default function DayStepComponent({ step, title }) {
    const isStepHeader = (ln) => {
        return ln[0] === "-";
    };
    // eslint-disable-next-line no-unused-vars
    const renderDayStep = () => {
        let isFirstStep = true;
        let isPushed = false;
        let finalContent = [];
        let tempStepContent = [];
        let tempStepTitle = "";

        const pushInfoCurrentStep = () => {
            finalContent.push(
                <div className="dayStepSection">
                    <h2>{tempStepTitle}</h2>
                    {tempStepContent.map((e) => e)}
                </div>
            );
        };
        for (let index = 0; index < step.length; index++) {
            console.log(isStepHeader(step[index]));
            if (isStepHeader(step[index])) {
                if (!isFirstStep) {
                    pushInfoCurrentStep();
                    isPushed = true;
                }
                isFirstStep = false;
                tempStepTitle = step[index].replace(/-/g, "");
                tempStepContent = [];
            } else {
                tempStepContent.push(<p>{step[index]}</p>);
            }
        }
        if (!isPushed) {
            pushInfoCurrentStep();
        }
        return finalContent;
    };

    return (
        <div className="dayStep">
            <div className="stepTitle">{title}</div>
            <div className="stepContent">{renderDayStep().map((e) => e)}</div>
        </div>
    );
}

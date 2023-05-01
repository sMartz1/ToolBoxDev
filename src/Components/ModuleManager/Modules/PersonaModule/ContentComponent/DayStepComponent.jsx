import React from "react";
import "./DayStepComponent.scss";

export default function DayStepComponent({ step, title }) {
    const isStepHeader = (ln) => {
        return ln[0] === "-";
    };

    const isImportantLine = (ln) => {
        return ln === "IMPORTANT! IMPORTANT! IMPORTANT!";
    };
    // eslint-disable-next-line no-unused-vars
    const renderDayStep = () => {
        let isFirstStep = true;
        let isPushed = false;
        let isImportant = false;
        let finalContent = [];
        let tempStepContent = [];
        let tempStepTitle = "";
        let startsWithoutSection = !isStepHeader(step[0]);
        const pushInfoCurrentStep = () => {
            finalContent.push(
                <div className="dayStepSection">
                    {tempStepTitle !== "" ? <h2>{tempStepTitle}</h2> : null}
                    {tempStepContent.map((e) => e)}
                </div>
            );
        };
        for (let index = 0; index < step.length; index++) {
            if (isImportantLine(step[index])) {
                isImportant = true;
            }
            if (isStepHeader(step[index])) {
                if (!isFirstStep) {
                    pushInfoCurrentStep();
                    isPushed = true;
                }
                isFirstStep = false;

                if (startsWithoutSection) {
                    pushInfoCurrentStep();
                    startsWithoutSection = false;
                }
                tempStepTitle = step[index].replace(/-/g, "");
                tempStepContent = [];
                isImportant = false;
            } else {
                tempStepContent.push(
                    <p className={isImportant ? "importantMessage" : ""}>
                        {step[index]}
                    </p>
                );
            }
        }
        if (!isPushed || tempStepContent !== "") {
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

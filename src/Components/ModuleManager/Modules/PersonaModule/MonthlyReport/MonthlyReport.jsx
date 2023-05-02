import React, { useState, useEffect } from "react";
import "./MonthlyReport.scss";
import { Table } from "antd";

export default function MonthlyReport({ data }) {
    const d = data.content;
    const [reportData, setReportData] = useState(null);

    useEffect(() => {
        setReportData(formatData);
    }, []);

    const inTableTitle = (ln) => {
        let tableTitles = [
            "Social Links",
            "Status Parameters",
            "Quests",
            "Books",
            "Trophies",
        ];
        let isTitle = false;
        for (let index = 0; index < tableTitles.length; index++) {
            if (ln.startsWith(tableTitles[index])) {
                console.log("Title found: ", ln);
                isTitle = true;
            }
        }
        return isTitle;
    };

    const removeInvalidChars = (str) => {
        // Expresión regular para caracteres inválidos
        const invalidChars = /[^a-zA-Z0-9_.:-]/g;

        const replacedStr = str.replace(/#/g, "Number");

        // Remover caracteres inválidos
        const cleanedStr = replacedStr.replace(invalidChars, "");

        return cleanedStr;
    };

    const createColumns = (ln) => {
        let arr = ln.split("\t");

        let tempObjArr = [];

        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            tempObjArr.push({
                title: element,
                dataIndex: removeInvalidChars(element),
            });
        }
        return tempObjArr;
    };

    const createData = (ln, columns, key) => {
        let arr = ln.split("\t");
        let tempObj = { key: key };
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            tempObj[columns[index].dataIndex] = element;
        }

        return tempObj;
    };

    const formatData = () => {
        let tempColumns = [];
        let tempData = [];
        let tempColumnsFinal = [];
        let tempDataFinal = [];
        let tempTitles = []; //
        let firstStep = true;

        let key = 1;

        for (let index = 1; index < d.length - 2; index++) {
            const ln = d[index];
            console.log("I :", index);
            if (inTableTitle(ln)) {
                tempTitles.push(ln);
                if (firstStep) {
                    firstStep = false;
                    index++;
                } else {
                    index++;
                    tempColumnsFinal.push(tempColumns);
                    tempDataFinal.push(tempData);
                    tempData = [];
                    key = 1;
                }
                tempColumns = createColumns(d[index]);
            } else {
                tempData.push(createData(ln, tempColumns, key));
                key++;
            }
        }

        return {
            data: tempDataFinal,
            columns: tempColumnsFinal,
            titles: tempTitles,
        };
    };

    const formatRender = () => {
        let tempArrRender = [];
        for (let index = 0; index < reportData.columns.length; index++) {
            let tempComponent = (
                <>
                    <div className="tableTitle">{reportData.titles[index]}</div>
                    <Table
                        columns={reportData.columns[index]}
                        dataSource={reportData.data[index]}
                        size="middle"
                    />
                </>
            );
            tempArrRender.push(tempComponent);
        }
        return tempArrRender;
    };

    if (reportData !== null) {
        return (
            <div className="monthlyContainer">
                {formatRender().map((e) => e)}
            </div>
        );
    }
    return <div>MonthlyReport</div>;
}

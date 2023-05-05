const fs = require("fs");
const pathM = require("path");
const path = pathM.join(__dirname, "../persona/persona4.txt");
const contents = fs.readFileSync(path, "utf8");

const cleanText = (arr) => {
    const tempArr = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element !== "\r") {
            tempArr.push(element.replace(/\r/g, ""));
        }
    }
    return tempArr;
};

const getLastMonth = (str) => {
    return str.split(" ")[0];
};

// Variables
let finalArray = [];
let tempObj = null;
let currentStepDay = null;
let lastMonth = "";

const typeOfLine = (ln) => {
    /* 
    0 - content line
    1 - Start day
    2 - Day step
    3 - Monthly report
  */

    //Check Start day
    if (ln[0] === "~") {
        let formatedString = ln.replace(/\r|~/g, "");
        //Check if monthly report
        if (formatedString === "Monthly Progress") {
            return 3;
        }
        return 1;
    }

    //Check if day step
    const availableSteps = [
        "Morning",
        "After School",
        "Evening",
        "Daytime",
        "Early Morning",
        "Lunchtime",
        "TV World",
        "Midterms",
    ];
    const isDay = availableSteps.indexOf(ln);
    if (isDay !== -1) {
        return 2;
    }
    return 0;
};

const processLine = (ln, type, index) => {
    switch (type) {
        case 0:
            processContent(ln);
            break;
        case 1:
            processDay(ln, index);
            break;
        case 2:
            processDayStep(ln);
            break;
        case 3:
            processMonthlyReport(ln, index);
            break;

        default:
            break;
    }
};

const processContent = (ln) => {
    if (tempObj !== null && ln !== "-----------------") {
        if (currentStepDay === null) {
            tempObj.content.push(ln);
        } else {
            tempObj[currentStepDay].push(ln);
        }
    }
};

const processDay = (ln, index) => {
    let formatedString = ln.replace(/\r|~/g, "");
    //If there is no previous day
    if (tempObj === null) {
        tempObj = { date: formatedString, content: [] };
        lastMonth = getLastMonth(tempObj.date);
        index++;
        return true;
    } else {
        //Prepare tempObj Before push
        currentStepDay = null;
        finalArray.push(tempObj);
        tempObj = { date: formatedString, content: [] };
        lastMonth = getLastMonth(tempObj.date);
        index++;
        return true;
    }
};

const processDayStep = (ln) => {
    currentStepDay = ln;
    tempObj[currentStepDay] = [];
};

const processMonthlyReport = (ln, index) => {
    let formatedString = ln.replace(/\r|~/g, "");
    //Prepare tempObj Before push
    currentStepDay = null;
    finalArray.push(tempObj);
    tempObj = { date: `${lastMonth} ${formatedString}`, content: [] };
};

const start = () => {
    //Reset
    finalArray = [];
    tempObj = null;
    currentStepDay = null;
    lastMonth = "";

    // Clean and split text
    let arrLines = cleanText(contents.split("\n"));

    //Loop through lines
    for (let index = 0; index < arrLines.length; index++) {
        //Current line
        const element = arrLines[index];
        const lineType = typeOfLine(element);

        processLine(element, lineType, index);
    }

    return finalArray;
};

module.exports = {
    start,
};

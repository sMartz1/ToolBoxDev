const logger = require("../../utils/logger");
const fs = require("fs");
const pathM = require('path');
const path =  pathM.join(__dirname, "../db/environments.json");

const defaultData =  [{
    title: "SearchEnv Default",
    links: [
        {
            title: "Google",
            url: "https://google.com",
            users: [
                {
                    username: "testUsername",
                    password: "testPassword",
                },
            ],
        },        
    ],
},{
    title: "SearchEnv Default",
    links: [
        {
            title: "Google",
            url: "https://google.com",
            users: [
                {
                    username: "testUsername",
                    password: "testPassword",
                },
            ],
        },        
    ],
}]

async function getEnvironments() {
    if (await checkFileExists()) {
        logger.info("Returning profileData");
        return environment();
    } else {
        await createDefaultEnvironment();
        return environment();
    }
}
function checkFileExists() {
    try {
        if (fs.existsSync(path)) {
            logger.info("Envirnments data found!.");
            return true;
        }
    } catch (err) {
        logger.info("Error checking file :", err);
    }
    logger.info("Environment data not found.");
    return false;
}

function createDefaultEnvironment() {
    logger.info("Creating default data into", path);
    let data = JSON.stringify(defaultData);
    fs.writeFileSync(path, data);
    logger.info("Data created");
}

function environment() {
    const environment = JSON.parse(fs.readFileSync(path));
    logger.info("dataProfile readed", environment);
    return environment;
}

function updateEnvironmentData(dataUpdate) {
    logger.info("Modifying environment data!");
    console.log(dataUpdate);
    let data = JSON.stringify(dataUpdate);
    fs.writeFileSync(path, data);
    logger.info("Settings updated");
}

module.exports = {
    getEnvironments,
    updateEnvironmentData,
};
const logger = require("../../utils/logger");
const fs = require("fs");
const pathM = require('path');
const path =  pathM.join(__dirname, "../db/profileData.json");

const generateModule = (moduleName, settings) => {
    return {
        title: moduleName,
        settings: [...settings],
    };
};
const generateSetting = (title, defaultValue, type) => {
    return {
        title,
        value: defaultValue,
        type,
    };
};

const defaultModules = () => {
    const apiKeySetting = generateSetting("ApiKey", "", "string");
    const activeSetting = generateSetting("active", true, "boolean");
    return [
      generateModule("afkModule", [activeSetting]),
      generateModule("branchModule", [activeSetting]),
      generateModule("naviModule", [activeSetting, apiKeySetting]),
      generateModule("linkModule", [activeSetting]),
        
    ];
};

const getModuleData = (name,setting)=>{
    const profile = JSON.parse(fs.readFileSync(path));
    const curentModule = profile.modules.find(e=>e.title === name)
    let valToReturn = curentModule.settings.find(e=>e.title === setting)
    return valToReturn.value
}

module.exports = {
    defaultModules,
    getModuleData
};

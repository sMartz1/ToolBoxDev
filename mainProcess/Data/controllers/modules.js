const logger = require("../../utils/logger");

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
        generateModule("naviModule", [activeSetting, apiKeySetting]),
    ];
};

module.exports = {
    defaultModules,
};

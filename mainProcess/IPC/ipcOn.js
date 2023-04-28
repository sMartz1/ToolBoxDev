// IPCMAIN event handler
const afkModule = require("./AfkModule/afkOnListeners");
const profileModule = require("./ProfileModule/profileOnListeners");
const settingModule = require("./SettingModule/settingOnListeners");
const naviModule = require("./NaviModule/naviOnListeners");
const linkModule = require("./LinkModule/linkOnListeners");
const personaModule = require("./PersonaModule/personaOnListeners");

function setupListeners(mainWindow, app) {
    afkModule.setupListeners(mainWindow, app);
    profileModule.setupListeners(mainWindow, app);
    settingModule.setupListeners(mainWindow, app);
    naviModule.setupListeners(mainWindow, app);
    linkModule.setupListeners(mainWindow, app);
    personaModule.setupListeners(mainWindow, app);
}

module.exports = { setupListeners };

// IPCMAIN event handler
const afkModule = require("./AfkModule/afkOnListeners");
const profileModule = require("./ProfileModule/profileOnListeners");
const settingModule = require("./SettingModule/settingOnListeners")

function setupListeners(mainWindow, app) {
   afkModule.setupListeners(mainWindow,app);
   profileModule.setupListeners(mainWindow,app);
   settingModule.setupListeners(mainWindow,app)
}

module.exports = { setupListeners };

// IPCMAIN event handler
const afkModule = require("./AfkModule/afkOnListeners");
const profileModule = require("./ProfileModule/profileOnListeners");

function setupListeners(mainWindow, app) {
   afkModule.setupListeners(mainWindow,app);
   profileModule.setupListeners(mainWindow,app);
}

module.exports = { setupListeners };

// IPCMAIN event handler
const afkModule = require("./AfkModule/afkOnListeners");


function setupListeners(mainWindow, app) {
   afkModule.setupListeners(mainWindow,app);
}

module.exports = { setupListeners };

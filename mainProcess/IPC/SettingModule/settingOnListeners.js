const { ipcMain } = require("electron");
const { updateSettings } = require("./settingFunctions");
const logger = require('../../utils/logger');
function setupListeners(mainWindow,app){
    ipcMain.handle("updateProfile", async (event, arg) => {
        logger.warn("object eceived")
        updateSettings(arg)

        
      });

}

module.exports = {
    setupListeners
}
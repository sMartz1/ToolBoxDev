const { ipcMain } = require("electron");
const { getCurrentProfile } = require("./profileFunctions");
const logger = require('../../utils/logger');
function setupListeners(mainWindow,app){
    ipcMain.handle("getProfile", async (event, arg) => {
        logger.warn("Get profile called")
        const profileData = await getCurrentProfile();
        logger.info("Sending data back!")
        return profileData;
        
      });

}

module.exports = {
    setupListeners
}
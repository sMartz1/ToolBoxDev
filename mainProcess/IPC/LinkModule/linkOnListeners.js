const { ipcMain, shell } = require("electron");
const { updateEnvironmentData , getEnvironments , copyUsers} = require("./linkFunctions");
const logger = require("../../utils/logger");
function setupListeners(mainWindow, app) {
    ipcMain.handle("openLink", async (event, arg) => {
        logger.warn(`Opening link to: ${arg}`);
        shell.openExternal(arg);
        return true
    });
    ipcMain.handle("getEnvironmentsData", async (event, arg) => {
        logger.warn(`getEnvironmentsData`);
        const data = await getEnvironments();
        return data
    });
    ipcMain.handle("updateEnvironmentData", async (event, arg) => {
        logger.warn(`updateEnvironmentData`);
        await updateEnvironmentData(arg);
        const cdata = await getEnvironments();
        return cdata
    });

    ipcMain.handle("copyUsers", async (event, arg) => {
        logger.warn(`copyUsers`);
        
        await copyUsers(arg);
        return true
    });

}

module.exports = {
    setupListeners,
};

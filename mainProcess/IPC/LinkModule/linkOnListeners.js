const { ipcMain, shell } = require("electron");

const logger = require("../../utils/logger");
function setupListeners(mainWindow, app) {
    ipcMain.handle("openLink", async (event, arg) => {
        logger.warn(`Opening link to: ${arg}`);
        shell.openExternal(arg);
        return true
    });
}

module.exports = {
    setupListeners,
};

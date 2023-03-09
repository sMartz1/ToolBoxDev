const { ipcMain } = require("electron");
const { startInterval, stopInterval } = require("./afkFunctions");
const logger = require("../../utils/logger")
function setupListeners(mainWindow,app){

    ipcMain.on("startAFK", (event, arg) => {
        logger.info("Starting AFK");
        mainWindow.webContents.send("isAfk", true);
        startInterval();
      });
      ipcMain.on("stopAFK", (event, arg) => {
        logger.info("Stoping AFK");
        stopInterval();
        mainWindow.webContents.send("isAfk", false);
      });
      ipcMain.on("closeApp", (event, arg) => {
        logger.info("close?");
        app.quit();
      });
}

module.exports = {
    setupListeners
}
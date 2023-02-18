const { ipcMain } = require("electron");
const { startInterval, stopInterval } = require("./afkFunctions");
function setupListeners(mainWindow,app){
    ipcMain.on("startAFK", (event, arg) => {
        mainWindow.webContents.send("isAfk", true);
        startInterval();
      });
      ipcMain.on("stopAFK", (event, arg) => {
        stopInterval();
        mainWindow.webContents.send("isAfk", false);
      });
      ipcMain.on("closeApp", (event, arg) => {
        console.log("close?");
        app.quit();
      });
}

module.exports = {
    setupListeners
}
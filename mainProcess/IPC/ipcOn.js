// IPCMAIN event handler
const { ipcMain } = require("electron");
const { mouse, left, right } = require("@nut-tree/nut-js");

let intervalID;

const startInterval = async () => {
  intervalID = setInterval(async () => {
    await mouse.move(right(20));
    await mouse.move(left(20));
  }, 300);
};
const stopInterval = async () => {
  clearInterval(intervalID);
};

function setupListeners(mainWindow, app) {
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

module.exports = { setupListeners };

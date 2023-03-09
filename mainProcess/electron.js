const electron = require("electron");
const path = require("path");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcOn = require("./IPC/ipcOn");
const logger = require('./utils/logger')

const isDev = require("electron-is-dev");

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 300,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
      devTools: true,
    },
    devTools:true,

    resizable: true,
  });
 
  // Setup IPC listeners
  ipcOn.setupListeners(mainWindow, app);

  // and load the index.html of the app.
  logger.info(__dirname);
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on("ready", createWindow);

const electron = require("electron");
const path = require("path");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {mouse, left, right} = require("@nut-tree/nut-js");
const {ipcMain} = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

const moveMouse = async()=>{
  await mouse.move(right(500));
  await mouse.move(left(500));
}
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation: false,
      preload:path.join(__dirname, 'preload.js')},
    frame:false
  });
  // and load the index.html of the app.
  console.log(__dirname);
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
ipcMain.on('moveMouse',(event,arg)=>{
   moveMouse();
})
app.on("ready", createWindow);
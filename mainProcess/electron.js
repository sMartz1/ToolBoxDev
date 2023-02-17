const electron = require("electron");
const path = require("path");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const {mouse, left, right} = require("@nut-tree/nut-js");
const {ipcMain,ipcRenderer} = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;
let intervalID;
const startInterval = async()=>{
  intervalID = setInterval(async()=>{
    await mouse.move(right(20));
    await mouse.move(left(20));
  },300)
}
const stopInterval = async()=>{
   clearInterval(intervalID);
}
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 300,
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
ipcMain.on('startAFK',(event,arg)=>{
  mainWindow.webContents.send("isAfk",true)
  startInterval();
})
ipcMain.on('stopAFK',(event,arg)=>{
  stopInterval();
  mainWindow.webContents.send("isAfk",false)
})
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on("ready", createWindow);
const { ipcMain } = require("electron");
const { getCurrentProfile } = require("./profileFunctions");
function setupListeners(mainWindow,app){
    ipcMain.on("getProfile", async (event, arg) => {
        const profileData = await getCurrentProfile();
        mainWindow.webContents.send("recieveProfile", profileData);
        
      });

}

module.exports = {
    setupListeners
}
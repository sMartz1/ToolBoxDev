const { ipcMain } = require("electron");
const { getPersonaData } = require("./personaFunctions");
const logger = require("../../utils/logger");
function setupListeners(mainWindow, app) {
    ipcMain.handle("getPersona", async (event, arg) => {
        logger.warn("Get persona called");
        const personaData = await getPersonaData();
        logger.info("Sending persona data back!");
        return personaData;
    });
}

module.exports = {
    setupListeners,
};

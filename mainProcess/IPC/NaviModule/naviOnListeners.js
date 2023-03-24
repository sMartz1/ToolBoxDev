const { ipcMain } = require("electron");
const { sendRequest } = require("./naviFunctions");
const logger = require('../../utils/logger');

function setupListeners(mainWindow,app){
    ipcMain.handle("sendMessageChat", async (event, arg) => {
        logger.warn("Sending message to OPENAI")
        const chatData = await sendRequest(arg);
        logger.info("Sending response")
        console.log(chatData.data.choices)
        return chatData.data.choices;
        
      });

}

module.exports = {
    setupListeners
}
export const sendMessage = (message) => {
        return window.ipcRenderer.invoke("sendMessageChat",message);
    };
    
export const openLink = (link) => {
        return window.ipcRenderer.invoke("openLink",link);
    };
    
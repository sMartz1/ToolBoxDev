export const openLink = (link) => {
        return window.ipcRenderer.invoke("openLink",link);
    };
    export const getEnvironmentData = (link) => {
        return window.ipcRenderer.invoke("getEnvironmentsData",link);
    };
    export const updateEnvironmentData = (link) => {
        return window.ipcRenderer.invoke("updateEnvironmentData",link);
    };
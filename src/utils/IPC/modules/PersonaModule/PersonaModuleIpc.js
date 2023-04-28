export const getPersona = () => {
    return window.ipcRenderer.invoke("getPersona");
};

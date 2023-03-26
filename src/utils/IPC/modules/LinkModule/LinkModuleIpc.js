export const openLink = (link) => {
    return window.ipcRenderer.invoke("openLink", link);
};
export const getEnvironmentData = () => {
    return window.ipcRenderer.invoke("getEnvironmentsData");
};
export const updateEnvironmentData = (data) => {
    return window.ipcRenderer.invoke("updateEnvironmentData", data);
};
export const copyUsers = (users) => {
    return window.ipcRenderer.invoke("copyUsers", users);
};



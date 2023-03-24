export const getProfileData = () => {
    return window.ipcRenderer.invoke("getProfile");
};

export const updateProfileData = (data) => {
    return window.ipcRenderer.invoke("updateProfile", data);
};

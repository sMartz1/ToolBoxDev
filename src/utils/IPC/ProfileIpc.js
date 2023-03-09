
export const getProfileData = () => {
  return window.ipcRenderer.invoke('getProfile');
};


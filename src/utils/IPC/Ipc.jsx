import AfkModuleIpc from "./modules/AfkModule/AfkModuleIpc";

export const useIPC = () => {
  
 

  //Module importation
  const { start, stop, isAfk } = AfkModuleIpc();



  //Close application
  const close = () => {
    window.ipcRenderer.send("closeApp");
  };


  return {
    start,
    stop,
    close,
    isAfk,
  
  };
};

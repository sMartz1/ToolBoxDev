import AfkModuleIpc from "./modules/AfkModule/AfkModuleIpc";
import ProfileIpc from "./ProfileIpc";
export const useIPC = () => {
  
 

  //Module importation
  const { start, stop, isAfk } = AfkModuleIpc();
  const { profile } = ProfileIpc();


  //Close application
  const close = () => {
    window.ipcRenderer.send("closeApp");
  };


  return {
    start,
    stop,
    close,
    isAfk,
    profile
  };
};

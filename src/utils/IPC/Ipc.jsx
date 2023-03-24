import AfkModuleIpc from "./modules/AfkModule/AfkModuleIpc";
import { sendMessage }  from './modules/NaviModule/NaviModuleIpc'
import { openLink } from './modules/LinkModule/LinkModuleIpc'

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
    sendMessage,
    openLink
  };
};

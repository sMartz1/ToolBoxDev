import { useEffect, useState } from "react";

export const useIPC = () => {
  const [isAfk, setIsAfk] = useState(false);
  const [profile, setProfile] = useState(false);

  const setupOn = () => {
    window.ipcRenderer.on("isAfk", (e, args) => {
      setIsAfk(args);
    });
    window.ipcRenderer.send("getProfile");
    window.ipcRenderer.on("recieveProfile", (e, args) => {
      console.log("Data profile from listener",args )
      setProfile(args);
    });
  };

  const removeOn = () => {
    window.ipcRenderer.removeAllListeners("isAfk");
    window.ipcRenderer.removeAllListeners("recieveProfile");
  };

  useEffect(() => {

    setupOn();
    return () => {
      removeOn();
    };
  }, []);

  const start = () => {
    window.ipcRenderer.send("startAFK");
  };
  const stop = () => {
    window.ipcRenderer.send("stopAFK");
  };
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

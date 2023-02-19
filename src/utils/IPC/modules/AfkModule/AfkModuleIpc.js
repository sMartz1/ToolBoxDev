import { useEffect, useState } from "react";

//AFKMODULE IPC CONFIG
export default function AfkModuleIpc() {
  const [isAfk, setIsAfk] = useState(false);

  //Setup listeners
  useEffect(() => {
    window.ipcRenderer.on("isAfk", (e, args) => {
      setIsAfk(args);
    });

    //Remove Listener unmounting component
    return () => {
      window.ipcRenderer.removeAllListeners("isAfk");
    };
  }, []);

  return {
    start,
    stop,
    isAfk,
  };
}

const start = () => {
  window.ipcRenderer.send("startAFK");
};
const stop = () => {
  window.ipcRenderer.send("stopAFK");
};

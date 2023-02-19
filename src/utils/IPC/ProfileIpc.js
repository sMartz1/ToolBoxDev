import { useEffect, useState } from "react";

//AFKMODULE IPC CONFIG
export default function ProfileIpc() {
  const [profile, setProfile] = useState(false);

    //Setup listeners
    useEffect(() => {
      window.ipcRenderer.send("getProfile");
      window.ipcRenderer.on("recieveProfile", (e, args) => {
               setProfile(args);
      });

          //Remove Listener unmounting component
          return ()=> {
            window.ipcRenderer.removeAllListeners("recieveProfile");
          }
    }, []);

  return {
    profile
  }
}
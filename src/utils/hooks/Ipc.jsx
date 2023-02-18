import { useEffect, useState } from "react"

export const useIPC = ()=>{

    const [isAfk,setIsAfk] = useState(false);
    
    useEffect(() => {
      window.ipcRenderer.on("isAfk",(e,args)=>{
        setIsAfk(args)
    })
      return () => {
        window.ipcRenderer.removeAllListeners("isAfk")
      }
    }, [])
    


  
    
    const start = ()=>{
        window.ipcRenderer.send('startAFK')
      }
      const stop = ()=>{
        window.ipcRenderer.send('stopAFK')
      }
      const close = ()=>{
        window.ipcRenderer.send('closeApp')
      }

    
    return{
        start,
        stop,
        close,
        isAfk
    }
}
import { useEffect, useState } from "react"

export const useIPC = ()=>{

    const [isAfk,setIsAfk] = useState(false);
    window.ipcRenderer.on("isAfk",(e,args)=>{
        setIsAfk(args)
    })


  
    
    const start = ()=>{
        window.ipcRenderer.send('startAFK')
      }
      const stop = ()=>{
        window.ipcRenderer.send('stopAFK')
      }

    
    return{
        start,
        stop,
        isAfk
    }
}
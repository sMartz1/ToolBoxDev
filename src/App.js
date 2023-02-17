import './App.css';
import { Button } from 'antd';
import ElectronStatus from './utils/ElectronStatus';
import { useIPC } from './utils/hooks/Ipc';
import gandalf from "./assets/images/afk.gif"



function App() {
 
 const {start , stop, isAfk } = useIPC();


  
  return (
    <div className="App">
        { isAfk ? 
        <>
        <Button type='primary' onClick={start} disabled>Start</Button>
        <img src={gandalf} />
        </>   :
        <Button type='primary' onClick={start} >Start</Button>
         
          } 
        <Button type='primary' onClick={stop} danger>Stop</Button>  
        <ElectronStatus />
       
    </div>
  );
}

export default App;

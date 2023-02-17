import './App.css';


function App() {
  const action = ()=>{
    console.log("ISELECTRON",window.isElectron)
    window.ipcRenderer.send('moveMouse')
  }


  return (
    <div className="App">
   

        <button type='text' onClick={action}>TEST</button>
     
    </div>
  );
}

export default App;

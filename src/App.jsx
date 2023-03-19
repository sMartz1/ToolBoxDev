import "./App.css";

import {ModuleManager, Header } from "./Components/index.jsx";
import { AppProvider } from "./Context/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <ModuleManager />
      </div>
    </AppProvider>
  );
}

export default App;

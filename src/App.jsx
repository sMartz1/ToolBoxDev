import "./App.css";
import { useState } from "react";
import {
    ModuleManager,
    Header,
    SettingsComponent,
} from "./Components/index.jsx";
import { AppProvider } from "./Context/AppContext";
function App() {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <AppProvider>
            <div className="App">
                <Header setIsSettingsOpen={setIsSettingsOpen} />
                {isSettingsOpen ? <SettingsComponent  setIsSettingsOpen={setIsSettingsOpen}/> : <ModuleManager />}
            </div>
        </AppProvider>
    );
}

export default App;

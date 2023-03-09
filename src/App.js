import "./App.css";
import { AfkModule, Header } from "./Components/index.jsx";
import { AppProvider } from "./Context/AppContext";
function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <AfkModule />
      </div>
    </AppProvider>
  );
}

export default App;

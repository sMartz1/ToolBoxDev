import "./App.css";
import { AfkModule, Header } from "./Components/index.jsx";
import { ProfileProvider } from "./utils/hooks/useProfile";
function App() {
  return (
    <ProfileProvider>
      <div className="App">
        <Header />
        <AfkModule />
      </div>
    </ProfileProvider>
  );
}

export default App;

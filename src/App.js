import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Menu />
      </div>
    </div>
  );
}

export default App;

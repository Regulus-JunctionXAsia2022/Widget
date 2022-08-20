import { useEffect } from "react";
import "./App.css";
import First from "./First";

function App() {
  useEffect(() => {
    window.addEventListener("message", function (e) {
      switch (e.data.type) {
        case "name":
          break;
        default:
          break;
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Zepep</h1>
      <First />
    </div>
  );
}

export default App;

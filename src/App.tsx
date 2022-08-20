import { useEffect } from "react";
import "./App.css";
import { Lion } from "./assets";

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
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            window.parent.postMessage(
              {
                type: "getHeart",
              },
              "*",
            );
          }}
        />
        <Lion />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

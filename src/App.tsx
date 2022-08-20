import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { ParentMessage, useAppDispatch } from "./utils";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener(
      "message",
      function (e: MessageEvent<ParentMessage>) {
        if (e.data.result === "success") {
          switch (e.data.type) {
            case "updateFriendship":
              dispatch({
                type: "updateFriendship",
                payload: {
                  id: e.data.data.id,
                  friendship: e.data.data.friendship,
                },
              });
              break;
            default:
              break;
          }
        } else {
        }
      },
    );
  }, []);

  return (
    <div className="App">
      <h1>Zepep</h1>
      <Home />
    </div>
  );
}

export default App;

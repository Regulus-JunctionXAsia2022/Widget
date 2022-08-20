import { useEffect } from "react";
import "./App.css";
import First from "./First";
import { ParentMessage, useAppDispatch } from "./utils";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener(
      "message",
      function (e: MessageEvent<ParentMessage>) {
        if (e.data.result === "success") {
          switch (e.data.type) {
            case "updateFriendShip":
              dispatch({
                type: "updateFriendShip",
                payload: {
                  id: e.data.data.id,
                  friendShip: e.data.data.friendship,
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
      <First />
    </div>
  );
}

export default App;

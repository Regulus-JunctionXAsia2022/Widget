import { useState } from "react";
import { Header, Card, PetList } from "./component";
import { useMessageListener } from "./hook";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

function App() {
  const [index, setIndex] = useState(0);
  useMessageListener();

  return (
    <div className="App">
      <Header />
      <PetList />
    </div>
  );
}

export default App;

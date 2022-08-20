import { useState } from "react";
import { Header, Card, PetList } from "./component";
import { useMessageListener } from "./hook";

function App() {
  useMessageListener();

  return (
    <div className="App">
      <Header />
      <PetList />
    </div>
  );
}

export default App;

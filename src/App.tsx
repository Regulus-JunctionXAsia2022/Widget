import { useState } from "react";
import { Header, PetList, SkinShop } from "./component";
import { useMessageListener } from "./hook";

function App() {
  useMessageListener();

  const [shopOpened, setShopOpened] = useState(false);

  return (
    <div className="App">
      <Header />
      {!shopOpened ? (
        <PetList setShopOpened={setShopOpened} />
      ) : (
        <SkinShop setShopOpened={setShopOpened} />
      )}
    </div>
  );
}

export default App;

import { Header, Home } from "./component";
import { useMessageListener } from "./hook";

function App() {
  useMessageListener();

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

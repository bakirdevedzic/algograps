import { useState } from "react";
import Graph from "./components/Graph";
import Settings from "./components/Settings";

function App() {
  const [array, setArray] = useState([]);
  return (
    <>
      <Settings />
      <Graph />
    </>
  );
}

export default App;

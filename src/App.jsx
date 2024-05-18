import { useState } from "react";
import Graph from "./components/Graph/Graph";
import Settings from "./components/Settings/Settings";
import { generateRandomArray } from "./utils/helpers";
import "./App.css";

function App() {
  const [array, setArray] = useState(() => generateRandomArray((length = 20)));

  return (
    <div className="page">
      <Settings />
      <Graph array={array} />
    </div>
  );
}

export default App;

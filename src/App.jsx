import { useState } from "react";
import Graph from "./components/Graph/Graph";
import Settings from "./components/Settings/Settings";
import { generateRandomArray } from "./utils/helpers";
import "./App.css";

function App() {
  const [size, setSize] = useState(20);
  const [speed, setSpeed] = useState(1);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [array, setArray] = useState(() => generateRandomArray((length = 20)));
  console.log(size, speed, algorithm);
  return (
    <div className="page">
      <Settings
        size={size}
        speed={speed}
        algorithm={algorithm}
        setSize={setSize}
        setSpeed={setSpeed}
        setAlgorithm={setAlgorithm}
      />
      <Graph array={array} />
    </div>
  );
}

export default App;

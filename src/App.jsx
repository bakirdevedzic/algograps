import { useEffect, useState } from "react";
import Graph from "./components/Graph/Graph";
import Settings from "./components/Settings/Settings";
import { generateRandomArray } from "./utils/helpers";
import "./App.css";

import { insertionSort } from "./utils/insertionSort";
import { bubbleSort } from "./utils/bubbleSort";
import { selectionSort } from "./utils/selectionSort";

function App() {
  const [isSorting, setIsSorting] = useState(false);
  const [size, setSize] = useState(20);
  const [speed, setSpeed] = useState(1);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [compared, setCompared] = useState([]);
  const [swap, setSwap] = useState([]);
  const [array, setArray] = useState();

  useEffect(() => {
    setArray(generateRandomArray(Number(size)));
  }, [size]);

  const handleSort = () => {
    if (algorithm === "selectionSort") {
      selectionSort(
        array,
        setArray,
        Number(speed) * 50,
        setCompared,
        setSwap,
        setIsSorting
      );
    }
    if (algorithm === "bubbleSort") {
      bubbleSort(
        array,
        setArray,
        Number(speed) * 50,
        setCompared,
        setSwap,
        setIsSorting
      );
    }
    if (algorithm === "insertionSort") {
      insertionSort(
        array,
        setArray,
        Number(speed) * 50,
        setCompared,
        setSwap,
        setIsSorting
      );
    }
    setIsSorting(true);
  };
  return (
    <div className="page">
      <Settings
        size={size}
        speed={speed}
        algorithm={algorithm}
        setSize={setSize}
        setSpeed={setSpeed}
        setAlgorithm={setAlgorithm}
        handleSort={handleSort}
        isSorting={isSorting}
      />
      <Graph array={array} compared={compared} swap={swap} />
    </div>
  );
}

export default App;

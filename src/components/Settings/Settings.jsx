import "./Settings.css";

function Settings({ size, speed, algorithm, setSize, setSpeed, setAlgorithm }) {
  return (
    <div className="settings">
      <button>Sort</button>
      <button>Generate New Array</button>
      <div>
        <select
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
          defaultValue={"bubbleSort"}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="insertionSort">Insertion Sort</option>
        </select>
      </div>
      <div>
        <label>Choose array size:</label>
        <select
          onChange={(e) => setSize(e.target.value)}
          value={size}
          defaultValue={"20"}
        >
          <option value="10">20</option>
          <option value="20">30</option>
          <option value="30">40</option>
        </select>
      </div>
      <div>
        <label>Choose speed:</label>
        <select
          onChange={(e) => setSpeed(e.target.value)}
          value={speed}
          defaultValue={"1"}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default Settings;

import "./Settings.css";

function Settings({
  size,
  speed,
  algorithm,
  setSize,
  setSpeed,
  setAlgorithm,
  handleSort,
  isSorting,
}) {
  return (
    <div className="settings">
      <div>
        <select
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
          disabled={isSorting}
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
          disabled={isSorting}
        >
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
      </div>
      <div>
        <label>Choose speed:</label>
        <select
          onChange={(e) => setSpeed(e.target.value)}
          defaultValue={speed}
          disabled={isSorting}
        >
          <option value="10">1</option>
          <option value="5">2</option>
          <option value="1">3</option>
          <option value="0.5">4</option>
          <option value="0.25">5</option>
          <option value="0.05">6</option>
        </select>
      </div>

      <button onClick={handleSort} disabled={isSorting}>
        Sort
      </button>
    </div>
  );
}

export default Settings;

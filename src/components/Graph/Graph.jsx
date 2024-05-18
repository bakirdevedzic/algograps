import "./Graph.css";

function Graph({ array }) {
  const width = 100 / array.length;
  return (
    <div className="graph-container">
      <div className="graph">
        {array.map((e, i) => {
          return (
            <div
              key={i}
              className="bar"
              style={{ height: `${e}px`, width: `${width}%` }}
            >
              {array.length <= 20 && <div>{e}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Graph;

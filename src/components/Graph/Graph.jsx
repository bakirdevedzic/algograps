import "./Graph.css";

function Graph({ array, compared, swap }) {
  const width = 100 / array?.length;
  const compare1 = compared?.length > 0 ? compared[0] : -1;
  const compare2 = compared?.length > 1 ? compared[1] : -1;

  const swap1 = swap?.length > 0 ? swap[0] : -1;
  const swap2 = swap?.length > 1 ? swap[1] : -1;
  return (
    <div className="graph-container">
      <div className="graph">
        {array?.map((e, i) => {
          return (
            <div
              key={i}
              className="bar"
              style={{
                height: `${e / 1.4}%`,
                width: `${width}%`,
                backgroundColor: `${
                  i === swap1 || i === swap2
                    ? "red"
                    : i === compare1 || i === compare2
                    ? "orange"
                    : "rgb(0, 67, 102)"
                }`,
                opacity: `${
                  i === swap1 || i === swap2
                    ? 1
                    : i === compare1 || i === compare2
                    ? 1
                    : (1 - e / Math.max(...array)) * 0.6 + 0.4
                }`,
              }}
            >
              {array?.length <= 20 && (
                <div
                  style={{
                    color: "black",
                    opacity: 1,
                    backgroundColor: "#b1c8f5",
                    padding: "2px 6px",
                    borderRadius: "0.1rem",
                  }}
                >
                  {e}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Graph;

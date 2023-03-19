import { useEffect, useState } from "react";

const TableTitle = ({ title, onChange }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function localChange(event) {
    const selected = data.find(
      (record) => record.week.toString() === event.target.value
    );
    onChange(selected);
  }

  useEffect(() => {
    fetch(
      "https://fherdelpino.appspot.com/expense/week?" +
        new URLSearchParams({
          pastWeeks: 5,
        })
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch data from resource");
        }
        return response.json();
      })
      .then((resData) => {
        setData(resData);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="TableTitle">
      <h2>{title}</h2>
      <label>week:</label>
      {error && <p>{error}</p>}
      {isPending && <p>Loading...</p>}
      {data && (
        <select name="weeks" id="weeks" onChange={localChange}>
          {data.map((record) => (
            <option key={record.week} value={record.week}>
              {record.week}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TableTitle;

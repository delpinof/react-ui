import { useState } from "react";

const Table = ({ title, columnHeaders, data }) => {
  const [records, setRecords] = useState(data);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleDelete = (id) => {
    fetch("https://fherdelpino.appspot.com/expense/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't delete the record.");
        }
        setErrorMsg(null);
        const newRecords = records.filter((record) => record.id !== id);
        setRecords(newRecords);
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
  };
  return (
    <div className="table">
      <h2>{title}</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.amount}</td>
              <td>{record.description}</td>
              <td>
                <button onClick={() => handleDelete(record.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

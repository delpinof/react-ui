import { useState } from "react";

const Table = ({ columnHeaders, data }) => {
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
      {errorMsg && <p>{errorMsg}</p>}
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.description}</td>
              <td style={{ textAlign: "right" }}>{record.amount}</td>
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

import { useState, useEffect } from "react";

const Table = ({ weekSelected }) => {
  const url =
    "https://fherdelpino.appspot.com/expense?" +
    new URLSearchParams({
      from: weekSelected.from,
      to: weekSelected.to,
    });

  const [expenses, setExpenses] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch data from resource.");
        }
        return response.json();
      })
      .then((resData) => {
        setExpenses(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  const handleDelete = (id) => {
    fetch("https://fherdelpino.appspot.com/expense/" + id, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't delete the record.");
        }
        const newRecords = expenses.filter((record) => record.id !== id);
        setExpenses(newRecords);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="table">
        {!expenses && <div>Loading...</div>}
        {expenses && (
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>date</th>
                <th>description</th>
                <th>amount</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((record) => (
                <tr key={record.id}>
                  <td>{record.name}</td>
                  <td>{record.date}</td>
                  <td>{record.description}</td>
                  <td style={{ textAlign: "right" }}>{record.amount}</td>
                  <td>
                    <button onClick={() => handleDelete(record.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {expenses && (
        <div>
          <br />
          <p>
            Total: {expenses.map((e) => e.amount).reduce((a, b) => a + b, 0)}
          </p>
        </div>
      )}
    </>
  );
};

export default Table;

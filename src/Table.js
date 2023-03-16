import { useHistory } from "react-router-dom";

const Table = ({ title, columnHeaders, data }) => {
  const history = useHistory();

  const handleDelete = (id) => {
    console.log("Deleting..." + id);
    fetch("https://fherdelpino.appspot.com/expense/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="table">
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
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

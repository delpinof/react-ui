const Table = ({ data, onDelete }) => {
  return (
    <div className="table">
      if (data){" "}
      {
        <table>
          <thead>
            <tr>
              {Object.keys(data).map((header) => (
                <th key={header}>{header}</th>
              ))}
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record) => (
              <tr key={record.id}>
                <td>{record.name}</td>
                <td>{record.date}</td>
                <td>{record.description}</td>
                <td style={{ textAlign: "right" }}>{record.amount}</td>
                <td>
                  <button onClick={onDelete}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }{" "}
      else {<p>Loading...</p>}
    </div>
  );
};

export default Table;

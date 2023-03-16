const Table = ({ title, columnHeaders, data, handleDelete }) => {
  return (
    <div className="table">
      <h1>{title}</h1>
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

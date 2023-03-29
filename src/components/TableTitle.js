const TableTitle = ({ title, data, selected, onChange }) => {
  return (
    <div className="TableTitle">
      <h2>{title}</h2>
      <div className="TableTitleContent">
        <label>week: </label>
        {!data && <p>Loading...</p>}
        {data && (
          <select name="weeks" id="weeks" onChange={onChange}>
            {data.map((record) => (
              <option key={record.week} value={record.week}>
                {record.week}
              </option>
            ))}
          </select>
        )}
        {data && (
          <div>
            From {selected.from} to {selected.to}
          </div>
        )}
      </div>
    </div>
  );
};

export default TableTitle;

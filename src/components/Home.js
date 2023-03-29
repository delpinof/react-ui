import TableTitle from "./TableTitle";
import { useEffect, useState } from "react";
import Table from "./Table";

const Home = () => {
  const [weekList, setWeekList] = useState([null]);
  const [weekSelected, setWeekSelected] = useState(null);
  const pastWeeks = 5;
  const url =
    "https://fherdelpino.appspot.com/expense/week?" +
    new URLSearchParams({
      pastWeeks: pastWeeks,
    });

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Couldn't fetch data from resource");
        }
        return response.json();
      })
      .then((resData) => {
        setWeekList(resData);
        setWeekSelected(resData[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  const handleWeekChange = (e) => {
    const weekNumber = parseInt(e.target.value);
    const weekObject = weekList.find((record) => record.week === weekNumber);
    setWeekSelected(weekObject);
  };

  return (
    <div className="home">
      {!weekSelected && <div>Loading...</div>}
      {weekSelected && (
        <TableTitle
          title="Expenses list"
          data={weekList}
          selected={weekSelected}
          onChange={handleWeekChange}
        ></TableTitle>
      )}
      {weekSelected && <Table weekSelected={weekSelected}></Table>}
    </div>
  );
};

export default Home;

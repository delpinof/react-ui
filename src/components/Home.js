import TableTitle from "./TableTitle";
import { useEffect, useState } from "react";
import Table from "./Table";

const Home = () => {
  const [weekList, setWeekList] = useState(null);
  const [weekNumberSelected, setWeekNumberSelected] = useState(0);
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
        setWeekNumberSelected(
          Math.max.apply(
            Math,
            resData.map((r) => r.week)
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  const handleWeekChange = (e) => {
    const weekNumber = parseInt(e.target.value);
    setWeekNumberSelected(weekNumber);
  };

  return (
    <div className="home">
      {!weekList && <div>Loading...</div>}
      {weekList && (
        <TableTitle
          title="Expenses list"
          data={weekList}
          selected={weekList.find((r) => r.week === weekNumberSelected)}
          onChange={handleWeekChange}
        ></TableTitle>
      )}
      {weekList && (
        <Table
          weekSelected={weekList.find((r) => r.week === weekNumberSelected)}
        ></Table>
      )}
    </div>
  );
};

export default Home;

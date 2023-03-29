import Table from "./Table";
import TableTitle from "./TableTitle";
import { useState } from "react";
import { getWeeks, getExpenses, expensesList } from "../utils/apiCalls";

function handleExpenseDelete(e) {
  console.log(e.target.value);
}

const Home = () => {
  // let weekList;
  // let expensesList;
  // getWeeks(5).then((weekListData) => {
  //   console.log("weekData", weekListData);
  //   weekList = weekListData;
  //   getExpenses(weekListData[0].from, weekListData[0].to).then(
  //     (expensesListData) => {
  //       console.log("expensesData", expensesListData);
  //       expensesList = expensesListData;
  //     }
  //   );
  // });
  const weeksList = getWeeks(5);
  const [weekData, setWeekData] = useState(weeksList[0]);
  const [expensesData, setExpensesData] = useState(expensesList);

  function handleWeekChange(e) {
    const weekNumber = parseInt(e.target.value);
    const weekObject = weeksList.find((record) => record.week === weekNumber);
    setWeekData(weekObject);
    setExpensesData(getExpenses(weekObject.from, weekObject.to));
  }

  return (
    <div className="home">
      <TableTitle
        title="Expenses list"
        data={weeksList}
        selected={weekData}
        onChange={handleWeekChange}
      ></TableTitle>
      <p>Expenses data: {JSON.stringify(expensesData)}</p>
      {/*<Table data={expensesData} onDelete={handleExpenseDelete}></Table> */}
    </div>
  );
};

export default Home;

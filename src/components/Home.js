import Table from "./Table";
import useFetch from "../hooks/useFetch";
import TableTitle from "./TableTitle";
import { useState } from "react";

const Home = () => {
  const apiUrl = "https://fherdelpino.appspot.com/expense";
  const columnHeaders = ["name", "date", "description", "amount"];
  const [weekData, setWeekData] = useState(null);

  const { data: expenses, isPending, error } = useFetch(apiUrl + "/all");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <TableTitle title="Expenses list" onChange={setWeekData}></TableTitle>
      {weekData && <p>{JSON.stringify(weekData)}</p>}
      {expenses && (
        <Table columnHeaders={columnHeaders} data={expenses}></Table>
      )}
    </div>
  );
};

export default Home;

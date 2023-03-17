import Table from "./Table";
import useFetch from "./useFetch";

const Home = () => {
  const apiUrl = "https://fherdelpino.appspot.com/expense";
  const columnHeaders = ["name", "date", "amount", "description"];

  const { data: expenses, isPending, error } = useFetch(apiUrl + "/all");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {expenses && (
        <Table
          title="Expenses list"
          columnHeaders={columnHeaders}
          data={expenses}
        ></Table>
      )}
    </div>
  );
};

export default Home;

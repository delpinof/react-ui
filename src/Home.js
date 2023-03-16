import Table from "./Table";
import useFetch from "./useFetch";

const Home = () => {
  const apiUrl = "https://fherdelpino.appspot.com/expense";
  const columnHeaders = ["name", "date", "amount", "description"];

  const { data: expenses, isPending, error } = useFetch(apiUrl + "/all");

  function handleDelete(id) {
    fetch(apiUrl + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("fetch DELETE from handleDelete");
      })
      .catch((error) => {
        // Handle error
      });
  }

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {expenses && (
        <Table
          title="Expenses"
          columnHeaders={columnHeaders}
          data={expenses}
          handleDelete={handleDelete}
        ></Table>
      )}
    </div>
  );
};

export default Home;

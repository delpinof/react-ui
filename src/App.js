import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Table from "./Table";

function App() {
  const apiUrl = "https://fherdelpino.appspot.com/expense";
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch(apiUrl + "/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetch GET from useEffect");
        setExpenses(data);
      });
  }, []);

  const columnHeaders = ["name", "date", "amount", "description"];

  function handleDelete(id) {
    fetch(apiUrl + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("fetch DELETE from handleDelete", response);
        if (response.ok) {
          console.log("filtering");
          const newExpenses = expenses.filter((record) => record.id !== id);
          console.log(newExpenses);
          setExpenses(newExpenses);
        }
      })
      .catch((error) => {
        // Handle error
      });
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Table
          title="Expenses"
          columnHeaders={columnHeaders}
          data={expenses}
          handleDelete={handleDelete}
        ></Table>
      </div>
    </div>
  );
}

export default App;

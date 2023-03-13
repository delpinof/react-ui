import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch("https://fherdelpino.appspot.com/expense/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setExpenses(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>List of Expenses</h1>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>date</th>
            <th>amount</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr>
              <td>{expense.name}</td>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

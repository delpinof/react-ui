import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("Elizabeth");
  const today = new Date();
  let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(today);
  let month = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(today);
  let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(today);
  const [date, setDate] = useState(`${year}-${month}-${day}`);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountNumber = parseFloat(amount);
    const expense = {
      name,
      date,
      amount: amountNumber,
      description: desc,
    };
    console.log(JSON.stringify(expense));
    fetch("https://fherdelpino.appspot.com/expense", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expense),
    }).then(() => {
      setIsPending(true);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new expense</h2>
      <form onSubmit={handleSubmit}>
        <label>user:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>date:</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>amount:</label>
        <input
          type="number"
          required
          value={amount}
          placeholder="0.0"
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <label>description:</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        {!isPending && <button>Add expense</button>}
        {isPending && <button disabled>Adding expense...</button>}
      </form>
    </div>
  );
};

export default Create;

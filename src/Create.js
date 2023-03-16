import { useState } from "react";

const Create = () => {
  const [user, setUser] = useState("hello");
  const [date, setDate] = useState("2023-03-16");
  const [amount, setAmount] = useState(0.0);
  const [desc, setDesc] = useState("");
  return (
    <div className="create">
      <h2>Add a new expense</h2>
      <form>
        <label>user:</label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
        <label>date:</label>
        <input
          type="text"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <label>amount:</label>
        <input
          type="text"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <label>description:</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></input>
        <button>Add expense</button>
      </form>
    </div>
  );
};

export default Create;

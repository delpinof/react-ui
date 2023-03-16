import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Fernando");

  const handleClick = (event) => {
    setName("Elizabeth");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;

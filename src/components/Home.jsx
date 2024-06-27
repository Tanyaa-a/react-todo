import { useState } from "react";
import { Link } from "react-router-dom";
import YourNameComponent from "./YourNameComponent";
import QuoteComponent from "./QuoteComponent"
import style from "./Home.module.css";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div className={style.Home}>
      <h2 className={style.HomeTitle}>Welcome to TodoList App!</h2>
      <span className={style.HomeQuestion}>
        Your tasks for today,
        <YourNameComponent name={name} onNameChange={setName} />
      </span>
      <Link to="/todolistpage">
        <button className={style.HomeButton}>Open TodoList</button>
      </Link>
      <QuoteComponent/>
    </div>
  );
};

export default Home;

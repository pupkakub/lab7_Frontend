import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/Home.css"; 
import gifBackground from "../images/back.gif"; 

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Яке виконане завдання бажаєте переглянути?</h1>
      <div className="tasks-list">
        <Link to="/task1" className="task-button">Завдання 1</Link>
        <Link to="/task2" className="task-button">Завдання 2</Link>
      </div>
    </div>
  );
}

export default Home;

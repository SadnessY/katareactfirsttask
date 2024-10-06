import React from "react";
import "./footer.css";
import TasksFilters from "../tasks-filters";

const Footer = () => {
    return (
        <footer className="footer">
          <span className="todo-count">1 items left</span>
          <TasksFilters />
          <button className="clear-completed">Clear completed</button>
        </footer>
    )
}

export { Footer };
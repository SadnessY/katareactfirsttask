import React from "react";
import "./footer.css";
import TasksFilters from "../tasks-filters/";

const Footer = ( { countCompleted, clearCompleted, switchFilter } ) => {
    return (
        <footer className="footer">
          <span className="todo-count">{ countCompleted } items left</span>
          <TasksFilters switchFilter={ (f) => switchFilter(f) } />
          <button onClick={ () => clearCompleted() } className="clear-completed">Clear completed</button>
        </footer>
    )
}

export { Footer };
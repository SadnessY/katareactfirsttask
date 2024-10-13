import React from "react";
import "./footer.css";
import TasksFilters from "../tasks-filters/tasks-filters"
import PropTypes from "prop-types";

const Footer = ( { countCompleted = 0, clearCompleted, switchFilter } ) => {
    return (
        <footer className="footer">
          <span className="todo-count">{ countCompleted } items left</span>
          <TasksFilters switchFilter={ (f) => switchFilter(f) } />
          <button onClick={ () => clearCompleted() } className="clear-completed">Clear completed</button>
        </footer>
    )
}

Footer.propTypes = {
  countCompleted: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  switchFilter: PropTypes.func.isRequired
}

export { Footer };
import React from "react";
import Task from "../task/task";
import "./task-list.css"
import PropTypes from "prop-types";

const TaskList = ({ tasks = [], onChanged, onDeleted, editItem }) => {
    const items = tasks.map((item) => {
        return <Task key={ item.id } editItem={ (text) => editItem(text, item.id) } onDeleted={ () => onDeleted(item.id) } onChanged={ () => onChanged(item.id) } options={ item } />
    })
    return (
        <ul className="todo-list">
            { items }
        </ul>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    onChanged: PropTypes.func.isRequired,
    onDeleted: PropTypes.func.isRequired,
    editItem: PropTypes.func.isRequired
}

export { TaskList }
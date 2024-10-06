import React from "react";
import Task from "../task/task";
import "./task-list.css"

const TaskList = ({ tasks, onChanged, onDeleted }) => {
    const items = tasks.map((item) => {
        return (
            <li key={ item.id } className={ item.status }>
                <Task onDeleted={ () => onDeleted(item.id) } onChanged={ () => onChanged(item.id) } options={ item } />
            </li>
        )
    })
    return (
        <ul className="todo-list">
            { items }
        </ul>
    );
}

export { TaskList }
import React from "react";
import Task from "../task";
import "./task-list.css"

const TaskList = ({ tasks }) => {
    const items = tasks.map((item) => {
        return (
            <li className={ item.status }>
                <Task options={ item } />
                <input type="text" class="edit" value="Editing task" />
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
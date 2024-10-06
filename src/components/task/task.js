import React from "react";

const Task = ({ options }) => {
    return (
        <div className="view">
            <input class="toggle" type="checkbox" />
              <label>
                <span class="description">{ options.description }</span>
                <span class="created">created { options.created }</span>
              </label>
              <button class="icon icon-edit"></button>
              <button class="icon icon-destroy"></button>
        </div>
    )
}

export { Task }
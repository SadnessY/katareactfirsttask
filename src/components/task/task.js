import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns'

export default class Task extends Component {
  render() {
    const { options, onChanged, onDeleted } = this.props
    return (
          <div className="view">
              <input className="toggle" type="checkbox" checked={ options.status === "completed" ? true : false } onChange={ onChanged } />
                <label>
                  <span className="description">{ options.description }</span>
                  <span className="created">{ formatDistanceToNow(options.created) }</span>
                </label>
                <button className="icon icon-edit"></button>
                <button onClick={ onDeleted } className="icon icon-destroy"></button>
          </div>
      )
  }
}
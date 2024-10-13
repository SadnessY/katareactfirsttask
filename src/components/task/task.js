import React, { Component } from "react";
import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from "prop-types";

export default class Task extends Component {

  state = {
    value: "",    
    editing: false
  }


  render() {
    const { options, onChanged, onDeleted, editItem } = this.props
    return (
      <li className={ options.status } >
          <div className="view">
              <input className="toggle" checked={ options.status === "completed" } type="checkbox" onChange={ () => { this.setState({ checked: !this.state.checked} ); onChanged() } } />
                <label>
                  <span className="description">{ options.description }</span>
                  <span className="created">created { formatDistanceToNowStrict(options.created) } ago</span>
                </label>
                <button onClick={ () => { options.status = "editing"; this.setState({ editing: !this.state.editing, value: options.description }) } } className="icon icon-edit"></button>
                <button onClick={ onDeleted } className="icon icon-destroy"></button>
          </div>
          <form onSubmit={(event) => {event.preventDefault(); editItem(this.state.value)}}>
            <input onChange={(event) => this.setState({ value: event.target.value })} type="text" className="edit" value={this.state.value} />
          </form>
      </li>
      )
  }
}
Task.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.objectOf(Date)
  }),
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
}
Task.defaultProps = {
  options: {}
}
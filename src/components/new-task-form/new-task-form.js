import React, { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {
  state = {
    label: '',
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    })
  }

  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          this.props.onItemAdded(this.state.label)
          this.setState({
            label: '',
          })
        }}
      >
        <input
          onChange={this.onLabelChange}
          value={this.state.label}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}

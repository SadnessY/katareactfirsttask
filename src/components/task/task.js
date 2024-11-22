import React, { Component } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from 'prop-types'

import './task.css'

export default class Task extends Component {
  state = {
    value: '',
    editing: false,
    min: 0,
    sec: 0,
    isActive: false,
    checked: false,
  }

  componentWillUnmount() {
    clearInterval(this.countingId)
  }

  minTimer = () => {
    this.setState({
      min: this.state.min + 1,
      sec: 0,
    })
  }

  secTimer = () => {
    if (this.state.checked) {
      clearInterval(this.countingId)
      this.setState({ isActive: !this.state.isActive })
    }
    if (this.state.sec < 60) {
      this.setState({
        sec: this.state.sec + 1,
      })
    } else {
      this.minTimer()
    }
  }

  startTimer = (event) => {
    event.stopPropagation()
    this.setState({ isActive: !this.state.isActive })
    this.countingId = setInterval(() => {
      console.log('sec + 1')
      this.secTimer()
    }, 1000)
  }

  pauseTimer = (event) => {
    event.stopPropagation()
    this.setState({ isActive: !this.state.isActive })
    clearInterval(this.countingId)
  }

  render() {
    const { options, onChanged, onDeleted, editItem } = this.props
    return (
      <li className={options.status}>
        <div className="view">
          <input
            className="toggle"
            checked={options.status === 'completed'}
            type="checkbox"
            onChange={() => {
              this.setState({ checked: !this.state.checked })
              onChanged()
            }}
          />
          <label>
            <span className="description">{options.description}</span>
            <span className="desc">
              {this.state.min}:{this.state.sec}
              {!this.state.isActive ? (
                <button onClick={this.startTimer} className="icon icon-play" />
              ) : (
                <button onClick={this.pauseTimer} className="icon icon-pause" />
              )}
            </span>
            <span className="created">created {formatDistanceToNowStrict(options.created)} ago</span>
          </label>
          <button
            onClick={() => {
              options.status = 'editing'
              this.setState({ editing: !this.state.editing, value: options.description })
            }}
            className="icon icon-edit"
          ></button>
          <button onClick={onDeleted} className="icon icon-destroy"></button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            editItem(this.state.value)
          }}
        >
          <input
            onChange={(event) => this.setState({ value: event.target.value })}
            type="text"
            className="edit"
            value={this.state.value}
          />
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
    created: PropTypes.any,
  }),
  onChange: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}
Task.defaultProps = {
  options: {},
  onChange: () => {},
}

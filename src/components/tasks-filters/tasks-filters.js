import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './tasks-filters.css'

export default class TasksFilters extends Component {
  switchSelected = (btnName) => {
    document.getElementsByClassName('selected')[0].classList.remove('selected')
    document.getElementById(btnName).classList.add('selected')
  }
  render() {
    return (
      <ul className="filters">
        <li>
          <button
            onClick={(e) => {
              this.switchSelected(e.target.id)
              this.props.switchFilter(e.target.id)
            }}
            id="allBtn"
            className="selected"
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              this.switchSelected(e.target.id)
              this.props.switchFilter(e.target.id)
            }}
            id="activeBtn"
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={(e) => {
              this.switchSelected(e.target.id)
              this.props.switchFilter(e.target.id)
            }}
            id="completedBtn"
          >
            Completed
          </button>
        </li>
      </ul>
    )
  }
}
TasksFilters.propTypes = {
  switchFilter: PropTypes.func.isRequired,
}

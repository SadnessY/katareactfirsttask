import React from 'react'
import PropTypes from 'prop-types'
import './tasks-filters.css'

const TasksFilters = (props) => {
  const switchSelected = (btnName) => {
    document.getElementsByClassName('selected')[0].classList.remove('selected')
    document.getElementById(btnName).classList.add('selected')
  }
  return (
    <ul className="filters">
      <li>
        <button
          onClick={(e) => {
            switchSelected(e.target.id)
            props.switchFilter(e.target.id)
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
            switchSelected(e.target.id)
            props.switchFilter(e.target.id)
          }}
          id="activeBtn"
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={(e) => {
            switchSelected(e.target.id)
            props.switchFilter(e.target.id)
          }}
          id="completedBtn"
        >
          Completed
        </button>
      </li>
    </ul>
  )
}
TasksFilters.propTypes = {
  switchFilter: PropTypes.func.isRequired,
}

export default TasksFilters

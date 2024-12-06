import React from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

import validator from '../funcs/validator'
const NewTaskForm = ({ onItemAdded }) => {
  const addItem = (event) => {
    document.getElementById('addTaskForm').addEventListener('keydown', addItem)
    if (event.key == 'Enter') {
      validator(document.getElementById('labelInput').value, onItemAdded, [
        document.getElementsByClassName('min')[0].value,
        document.getElementsByClassName('sec')[0].value,
      ])
      document.getElementById('labelInput').value = ''
      document.getElementsByClassName('min')[0].value = ''
      document.getElementsByClassName('sec')[0].value = ''
      document.getElementById('addTaskForm').removeEventListener('keydown', addItem)
    }
  }
  return (
    <div className="addForm">
      <form id="addTaskForm">
        <input onFocus={addItem} id="labelInput" type="text" className="new-todo" placeholder="Task" autoFocus />
        <input id="minInput" className="new-todo min" type="text" placeholder="Min" />
        <input id="minInput" className="new-todo sec" type="text" placeholder="Sec" />
      </form>
    </div>
  )
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}

export default NewTaskForm

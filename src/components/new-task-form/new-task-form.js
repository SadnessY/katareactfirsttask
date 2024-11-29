import React, { useState } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'
const NewTaskForm = ({ onItemAdded }) => {
  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onItemAdded(label)
        setLabel('')
      }}
    >
      <input
        onChange={onLabelChange}
        value={label}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  )
}

NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}

export default NewTaskForm

import React, { useState, useRef, useEffect } from 'react'
import { formatDistanceToNowStrict } from 'date-fns'
import PropTypes from 'prop-types'
import './task.css'
const Task = ({ options = {}, onChanged = () => {}, onDeleted = {}, editItem }) => {
  const togRef = useRef()
  const secRef = useRef()
  const [value, setValue] = useState('')
  const [editing, setEditing] = useState(false)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [checked, setChecked] = useState(false)
  const [timer, setTimer] = useState(null)

  const minTimer = () => {
    setMin((min) => min + 1)
    setSec(0)
  }

  const secTimer = () => {
    if (togRef.current.checked) {
      setIsActive(!isActive)
      clearInterval(timer)
    } else {
      if (
        secRef.current.innerHTML.slice(
          secRef.current.innerHTML.indexOf(':') + 1,
          secRef.current.innerHTML.indexOf('<')
        ) < 60
      ) {
        setSec((sec) => sec + 1)
      } else {
        minTimer()
      }
    }
  }

  const startTimer = (event) => {
    event.stopPropagation()
    setIsActive(!isActive)
    setTimer(
      setInterval(() => {
        secTimer()
      }, 1000)
    )
  }
  const pauseTimer = (event) => {
    event.stopPropagation()
    setIsActive(!isActive)
    clearInterval(timer)
  }

  useEffect(() => {
    return () => {
      clearInterval(timer)
    }
  }, [timer])

  return (
    <li className={options.status}>
      <div className="view">
        <input
          ref={togRef}
          className="toggle"
          checked={options.status === 'completed'}
          type="checkbox"
          onChange={() => {
            setChecked(!checked)
            onChanged()
          }}
        />
        <label>
          <span className="description">{options.description}</span>
          <span className="desc" ref={secRef}>
            {min}:{sec}
            {!isActive ? (
              <button onClick={startTimer} className="icon icon-play" />
            ) : (
              <button onClick={pauseTimer} className="icon icon-pause" />
            )}
          </span>
          <span className="created">created {formatDistanceToNowStrict(options.created)} ago</span>
        </label>
        <button
          onClick={() => {
            options.status = 'editing'
            setEditing(!editing), setValue(options.description)
          }}
          className="icon icon-edit"
        ></button>
        <button onClick={onDeleted} className="icon icon-destroy"></button>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          editItem(value)
        }}
      >
        <input onChange={(event) => setValue(event.target.value)} type="text" className="edit" value={value} />
      </form>
    </li>
  )
}
Task.propTypes = {
  options: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.any,
  }),
  onChanged: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}
export default Task

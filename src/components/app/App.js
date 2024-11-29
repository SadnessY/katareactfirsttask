import React, { useState } from 'react'

import Footer from '../footer'
import NewTaskForm from '../new-task-form/new-task-form'
import TaskList from '../task-list'
import './buttons.css'
import './app.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'active task', status: 'active', created: new Date(), min: 0, sec: 0 },
    { id: 2, description: 'Active task', status: 'active', created: new Date(), min: 0, sec: 0 },
  ])
  const [filters, setFilters] = useState('allBtn')

  const filterTasks = () => {
    switch (filters) {
      case 'allBtn':
        return tasks
      case 'activeBtn':
        return tasks.filter((i) => i.status === 'active')
      case 'completedBtn':
        return tasks.filter((i) => i.status === 'completed')
      default:
        return tasks
    }
  }

  const changeItem = (id) => {
    setTasks(() => {
      const newArr = tasks.slice(0)
      const idx = newArr.findIndex((el) => el.id === id)
      const item = newArr[idx]
      switch (item.status) {
        case 'completed':
          item.status = 'active'
          break
        case 'active':
          item.status = 'completed'
          break
        default:
          break
      }
      newArr[idx] = item
      return newArr
    })
  }

  const deleteItem = (id) => {
    setTasks(() => {
      const idx = tasks.findIndex((el) => el.id === id)
      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
      return newArr
    })
  }

  const switchFilter = (f) => {
    setFilters(f)
  }

  const clearCompleted = () => {
    setTasks(() => {
      const newArr = tasks.filter((item) => item.status !== 'completed')
      return newArr
    })
  }

  const editItem = (text, id) => {
    setTasks(() => {
      const idx = tasks.findIndex((el) => el.id === id)
      const editingItem = tasks[idx]
      editingItem.description = text
      editingItem.status = 'active'
      const newArr = [...tasks.slice(0, idx), editingItem, ...tasks.slice(idx + 1)]
      return newArr
    })
  }
  const addItem = (text) => {
    setTasks(() => {
      const newArr = [...tasks, { id: Math.random(), description: text, status: 'active', created: Date.now() }]
      return newArr
    })
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={addItem} />
      </header>
      <section className="main">
        <TaskList editItem={editItem} onDeleted={deleteItem} onChanged={changeItem} tasks={filterTasks()} />
      </section>
      <Footer
        switchFilter={switchFilter}
        clearCompleted={clearCompleted}
        countCompleted={tasks.filter((i) => i.status !== 'completed').length}
      />
    </section>
  )
}

export default App

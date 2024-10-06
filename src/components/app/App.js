import React, { Component } from 'react';
import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import "./buttons.css";
import "./app.css";

export default class App extends Component {
  state = {
    tasks: [ 
      { id: 1, description: "Completed task", status: "completed", created: "17 seconds ago" },
      { id: 2, description: "Active task", status: "active", created: "5 minutes ago" },
      { id: 3, description: "Editing task", status: "editing", created: "5 minutes ago" }
    ]
  }
  changeItem = (id) => {
    this.setState(({ tasks }) => {
      const newArr = tasks.slice(0)
      const idx = newArr.findIndex(el => el.id === id)
      const item = newArr[idx]
      switch(item.status) {
        case "completed":
          item.status = "active"
          break
        case "active":
          item.status = "completed"
          break
        default:
          break
      }
      newArr[idx] = item
      return {
        tasks: newArr
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id)
      const newArr = [...tasks.slice(0, idx), ...tasks.slice(idx + 1)]
      return {
        tasks: newArr
      }
    })
  }

  render() {
    return (<section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList onDeleted={ this.deleteItem } onChanged={ this.changeItem } tasks = { this.state.tasks } />
      </section>
      <Footer />
    </section>
    )};
}
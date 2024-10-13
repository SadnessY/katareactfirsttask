import React, { Component } from 'react';
import Footer from '../footer';
import NewTaskForm from '../new-task-form/new-task-form';
import TaskList from '../task-list';
import "./buttons.css";
import "./app.css";

export default class App extends Component {
  state = {
    tasks: [ 
      { id: 1, description: "Completed task", status: "completed", created: new Date() },
      { id: 2, description: "Active task", status: "active", created: new Date() }
    ],
    filters: "allBtn"
  }

  filterTasks = () => {
    switch (this.state.filters){
      case "allBtn":
        return this.state.tasks
      case "activeBtn":
        return this.state.tasks.filter(i => i.status === "active")
      case "completedBtn":
        return this.state.tasks.filter(i => i.status === "completed")
      default:
        return this.state.tasks
    }
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

  switchFilter = (f) => {
    this.setState({
      filters: f
    })
  }

  clearCompleted = () => {
    this.setState(({ tasks }) => {
      const newArr = tasks.filter(item => item.status !== "completed")
      return {
        tasks: newArr
      }
    })
  }

  editItem = (text, id) => {
    this.setState(({ tasks }) => {
      const idx = tasks.findIndex(el => el.id === id)
      const editingItem = tasks[idx]
      editingItem.description = text
      editingItem.status = "active"
      const newArr = [...tasks.slice(0, idx), editingItem, ...tasks.slice(idx + 1)]
      return {
        tasks: newArr
      }
    })
  }

  addItem = (text) => {
    this.setState(({ tasks }) => {
      const newArr = [...tasks, { id: Math.random(), description: text, status: "active", created: Date.now() }]
      return {
        tasks: newArr
      }
    })
  }
  render() {
    return (
    <section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onItemAdded={ this.addItem } />
      </header>
      <section className="main">
        <TaskList editItem={ this.editItem } onDeleted={ this.deleteItem } onChanged={ this.changeItem } tasks = { this.filterTasks() } />
      </section>
      <Footer switchFilter={ this.switchFilter } clearCompleted={ this.clearCompleted } countCompleted={ this.state.tasks.filter(i => i.status !== "completed").length } />
    </section>
    )};
}
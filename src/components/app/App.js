import Footer from '../footer';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import "./buttons.css";
import "./app.css";

function App() {
  const tasks = [ { description: "Completed task", status: "completed", created: "17 seconds ago" }, { description: "Active task", status: "active", created: "5 minutes ago" }, { description: "Editing task", status: "editing", created: "5 minutes ago" } ]
  return (
    <section className='todoapp'>
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <TaskList tasks = { tasks } />
      </section>
      <Footer />
    </section>
  );
}

export default App;

import { useState } from "react"
import Header from "./components/Header"
import "./App.css"
function App() {

  const [tasks, setTasks] = useState([
    "Learn React",
    "Build Task App"
  ])
  const [newTask, setNewTask] = useState("")
  function addTask() {
      if(newTask.trim() === "") {
        return
      }
      setTasks([...tasks, newTask])

      setNewTask("")
    }

  function deleteTask(indexToDelete) {

    const updatedTasks = tasks.filter((task, index) => {
      return index !== indexToDelete
    })

    setTasks(updatedTasks)
  }
  return (
    <div className="container">

    
    <div className="card">
      <Header title="Task Tracker" />
      <input
        type="text"
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
      />


      <button onClick={addTask}>
        Add Task
      </button>

      {tasks.map((task, index) => (
        <div>
          <p>{task}</p>

          <button onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}

    </div>
    </div>
  )
}

export default App
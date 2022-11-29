import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../App"
import Task from "./Task"
import TaskForm from "./TaskForm"
import loadingImg from "../assests/loader.gif"
// http://localhost:5000/api/tasks


const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [taskID, setTaskID] = useState("")


  const [formData, setFormData] = useState({
    name: "",
    completed: false
  })

  const { name } = formData

  const handleInputChange = (e) => {
    const {name , value} = e.target
    setFormData({ ...formData , [name]: value})
  }

  const getTasks = async () => {
    setIsLoading(true)
    try {
      const { data } = await axios.get(`${URL}/api/tasks`)
      setTasks(data)
      setIsLoading(false)

    } catch (error) {
      toast.error(error.message)
      console.log(error);
      setIsLoading(false)
    }
  }

  const createTask = async (e) => {
    e.preventDefault()
    if (name === "") {
      return toast.error("Input field is required")
    }

    try {
      await axios.post(`${URL}/api/tasks` , formData)
      toast.success("Task added successfully")
      setFormData({ ...formData, name:""})
      getTasks()
    } catch (error) {
      toast.error(error.message) 
    }
  }

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`)
      getTasks()
    } catch (error) {
        toast.error(error.message)
    }
  }

  const getSingleTask = async (task) => {
    setFormData({ name: task.name, completed:false})
    setTaskID(task._id)
    setIsEditing(true)
  }

  const updateTask = async () => {

  }
  // const setToComplete = async (task) => {
  //   const newFormData = {
  //     name: task.name,
  //     completed : true
  //   }
  // }

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm 
      name={name} 
      handleInputChange={handleInputChange}  createTask={createTask} 
      isEditing={isEditing}
      update
      />
      <div className="--flex-between --pb">
        <p>
          <b>Total Tasks : </b> 0
        </p>
        <p>
          <b>Completed Tasks : </b> 0
        </p>
      </div>
      <hr />
      {
        isLoading && (
          <div className="--flex-center">
            <img src={loadingImg} alt="LOADING" />
          </div>
        )
      }
      {
        !isLoading && tasks.length === 0 ? (
          <p className="--py">No Task Added .Please add a task</p>
        ) : (
          <>
          {
            tasks.map((task,index) => {
              return (
                <Task 
                key={task._id} 
                task={task} 
                index={index} 
                deleteTask={deleteTask}
                getSingleTask={getSingleTask}
                />
              )
            })
          }
           </>
        )
      }
     
    </div>
  )
}

export default TaskList

import { Task } from "../../types"
import TaskItem from "../task-item/TaskItem"
import { useEffect, useState } from "react"
import axios from "axios"

const Tasks = () => {
    const [tasks,setTasks] = useState<Task[]>([])
    const getTasks = async () =>{
      const response = await axios.get("http://localhost:5000/tasks")
      setTasks(response.data);
    }
    useEffect(() => {
      getTasks()
    })
    if(tasks.length===0) return <p>Loading...</p>
  return (
    <div>
        {tasks?.map((item: Task) => {
            return(
                <TaskItem key={item.id} text={item.text} day={item.day} reminder={item.reminder} id={item.id}/>
            )
        })}
    </div>
  )
}

export default Tasks
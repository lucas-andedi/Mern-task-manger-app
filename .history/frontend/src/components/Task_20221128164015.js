import { FaEdit} from 'react-o'

const Task = () => {
  return (
    <div className="task">
      <p>
        <b>1.</b>
        Task 1
      </p>
      <div className="task-icons">
        <FaEdit />
      </div>
    </div>
  )
}

export default Task

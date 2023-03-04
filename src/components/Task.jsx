import { FaCheckDouble, FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({ task, index, deletetask, getSingleTask, completetask }) => {
  return (
    <>
      <div
        id={task._id}
        className={
          task.completed ? "tasks bg complete" : "tasks bg incomplete"
        }>
        <p>
          <b>{index + 1}</b> . {task.title}
        </p>
        <div className='flex gap-3'>
          <FaCheckDouble
            className=' text-green-500 cursor-pointer'
            onClick={() => {
              completetask(task);
            }}
          />
          <FaEdit
            onClick={() => {
              getSingleTask(task);
            }}
            className=' text-purple-500 cursor-pointer'
          />
          <FaTrashAlt
            className=' text-red-500 cursor-pointer'
            onClick={() => {
              deletetask(task._id);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Task;

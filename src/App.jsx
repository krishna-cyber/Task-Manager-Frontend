import TaskList from "./components/TaskList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className=' flex justify-center items-center h-screen w-screen bg-blue-400'>
        <TaskList />
      </div>
      <ToastContainer autoClose={1300} />
    </>
  );
}

export default App;

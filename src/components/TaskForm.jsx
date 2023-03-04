import server from "../../public/config/server";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const TaskForm = ({ fetchData, editing, editTask }) => {
  const { register, handleSubmit, setValue, getValues } = useForm();

  const onSubmit = async (data) => {
    if (!editing) {
      await server
        .post("http://localhost:3000/tasks/add", data)
        .then((res) => {
          toast.success("Task added successfully !");
          fetchData();
          setValue("title", "");
        })
        .catch((err) => {
          console.log(err);
          toast.error(`${err.message}🥺`);
        });
    }
  };

  const updateData = async (editTask) => {
    editTask.title = getValues("title");
    await server
      .put(`http://localhost:3000/tasks/${editTask._id}`, editTask)
      .then((res) => {
        toast.success("Task updated successfully !");
        fetchData();
        setValue("title", "");
        editing = false;
      })
      .catch((err) => {
        console.log(err);
        toast.error(`${err.message}🥺`);
      });
  };

  return (
    <>
      <form
        className=' flex  items-center justify-between'
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className=' p-1 w-full mr-4 outline-none rounded-md px-3 bg-slate-300'
          {...register("title", { required: true })}
          placeholder='Add a task'
        />

        {editing ? setValue("title", editTask.title) : null}

        {editing ? (
          <button
            className='btn cursor-pointer'
            onClick={() => {
              updateData(editTask);
            }}>
            edit
          </button>
        ) : (
          <button className='btn cursor-pointer' type='submit'>
            submit
          </button>
        )}
      </form>
    </>
  );
};

export default TaskForm;

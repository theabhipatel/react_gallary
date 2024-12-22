import { FormEvent, useState } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { addTodo } from "../../../store/features/todo/todoSlice";

const AddAndUpdateTodo = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addTodo({ id: `TID${new Date().getTime()}`, title, description, isDone })
    );
    setTitle("");
    setDescription("");
    setIsDone(false);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSave}
        className="flex w-[90%] md:w-[60%] bg-gray-100 rounded-md flex-col gap-2 p-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="p-0.5 px-2"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="p-0.5 px-2 "
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            id="isDone"
            checked={isDone}
            onChange={(e) => setIsDone(e.target.checked)}
          />
          <label htmlFor="isDone">Mark as Done</label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-20 flex items-center justify-center h-8 bg-indigo-500 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAndUpdateTodo;

import { FC, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTodo, updateTodo } from "../../../store/features/todo/todoSlice";
import { useNavigate } from "react-router-dom";

interface IProps {
  id?: string;
}

const AddAndUpdateTodo: FC<IProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todo);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isDone, setIsDone] = useState(false);

  /** is Update page then finding todo */
  useEffect(() => {
    if (id) {
      const todo = todos.find((todo) => todo.id === id);
      if (todo) {
        setTitle(todo.title);
        setDescription(todo.description);
        setIsDone(todo.isDone);
      } else {
        navigate("/todo");
      }
    }
  }, [id]);

  const handleSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (id) {
      dispatch(
        updateTodo({
          id,
          title,
          description,
          isDone,
        })
      );
    } else {
      dispatch(
        addTodo({
          id: `TID${new Date().getTime()}`,
          title,
          description,
          isDone,
        })
      );
    }

    setTitle("");
    setDescription("");
    setIsDone(false);
    navigate("/todo");
  };

  return (
    <div className="flex justify-center my-10">
      <form
        onSubmit={handleSave}
        className="flex w-[90%] md:w-[60%] bg-gray-100 rounded-md flex-col gap-2 p-5"
      >
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center ">
          {id ? "Update Todo" : "Add New Todo"}
        </h1>
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
            className="w-28 flex items-center justify-center h-8 bg-indigo-500 text-white rounded-md"
          >
            {id ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAndUpdateTodo;

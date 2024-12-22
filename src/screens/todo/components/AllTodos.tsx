import { Link } from "react-router-dom";
import {
  removeTodo,
  toggleIsDone,
} from "../../../store/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

const AllTodos = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todo);

  const handleToggleTodoIsDone = (id: string) => {
    dispatch(toggleIsDone(id));
  };
  const handleDeleteTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] md:w-[60%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-5">
        <div className="flex justify-end mb-5">
          <Link to={"/todo/new"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              New
            </button>
          </Link>
        </div>
        {todos.length === 0 && (
          <div className="h-full flex justify-center items-center ">
            <h3>There is no todo found.</h3>
          </div>
        )}
        {todos.map((todo) => {
          const { id, title, description, isDone } = todo;
          return (
            <div
              key={id}
              className="flex gap-2 p-2 rounded-md bg-indigo-600/10"
            >
              <div className="flex gap-2 w-full">
                <button
                  onClick={() => handleToggleTodoIsDone(id)}
                  className="h-6 min-w-6 border rounded-sm border-indigo-600 flex justify-center items-center text-lg"
                >
                  {isDone ? "✔" : ""}
                </button>
                <div>
                  <h2
                    className={`font-semibold ${isDone ? "line-through" : ""}`}
                  >
                    {title}
                  </h2>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Link to={`/todo/update/${id}`}>
                  <button className="h-6 w-8 border rounded-sm border-green-700 flex justify-center items-center text-green-700 text-sm">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDeleteTodo(id)}
                  className="h-6 w-8 border rounded-sm border-red-700 flex justify-center items-center text-red-700 text-sm"
                >
                  Del
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTodos;

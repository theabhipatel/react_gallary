import { Link } from "react-router-dom";
import {
  ITodo,
  removeTodo,
  toggleIsDone,
} from "../../../store/features/todo/todoSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect, useState } from "react";

const AllTodos = () => {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todo);
  const [filteredTodos, setFilteredTodos] = useState<ITodo[]>(todos);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  /** ---> Debouncing search text */
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  /** --->  filteredTodos based on search */
  useEffect(() => {
    if (!debouncedSearchText) {
      setFilteredTodos(todos);
    } else {
      const searchedTodos = todos.filter((todo) => {
        return (
          todo.title
            .toLowerCase()
            .includes(debouncedSearchText.toLowerCase()) ||
          todo.description
            .toLowerCase()
            .includes(debouncedSearchText.toLowerCase())
        );
      });
      setFilteredTodos(searchedTodos);
    }
  }, [debouncedSearchText]);

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

        {todos.length > 0 && (
          <div className="h-full flex my-2 items-center ">
            <input
              type="search"
              placeholder="Search for todos"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="p-0.5 h-8 px-2 rounded-l-md border-2 border-transparent outline-none focus:border-indigo-500"
            />
            <button className="w-20 flex items-center justify-center h-8 bg-indigo-500 text-white rounded-r-md ">
              {" "}
              Search
            </button>
          </div>
        )}

        {todos.length > 0 && filteredTodos.length === 0 && (
          <div className="h-full flex justify-center items-center ">
            <h3>There is no todo match Search.</h3>
          </div>
        )}
        {filteredTodos.map((todo) => {
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

import AddAndUpdateTodo from "./components/AddAndUpdateTodo";
import AllTodos from "./components/AllTodos";

const Todo = () => {
  return (
    <>
      <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center my-5">
        Todo App With Redux Toolkit
      </h1>
      <AddAndUpdateTodo />
      <AllTodos />
    </>
  );
};

export default Todo;

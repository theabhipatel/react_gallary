import { useParams } from "react-router-dom";
import AddAndUpdateTodo from "./components/AddAndUpdateTodo";

const UpdateTodo = () => {
  const { id } = useParams();

  return <AddAndUpdateTodo id={id} />;
};

export default UpdateTodo;

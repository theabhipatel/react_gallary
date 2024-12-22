import { Provider } from "react-redux";
import Todo from "./screens/todo/Todo";
import { store } from "./store/store";

function App() {
  return (
    <div className="max-auto max-w-[1536px]">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;

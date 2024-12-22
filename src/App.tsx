import { Provider } from "react-redux";
import Todo from "./screens/todo/Todo";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <div className="max-auto max-w-[1536px]">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/new" element={<Todo />} />
            <Route path="/todo/update/:id" element={<Todo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

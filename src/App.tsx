import { Provider } from "react-redux";
import Todo from "./screens/todo/Todo";
import { store } from "./store/store";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/NotFound";
import NewTodo from "./screens/todo/NewTodo";
import UpdateTodo from "./screens/todo/UpdateTodo";
import DynamicFrom from "./screens/dynamicForm/DynamicFrom";
import Accordion from "./screens/accordion/Accordion";
import InfiniteScroll from "./screens/infiniteScroll/InfiniteScroll";
import NoInternet from "./screens/noInternet/NoInternet";
import ProgressBar from "./screens/progressBar/ProgressBar";
import Stopwatch from "./screens/stopwatch/Stopwatch";
import DigitalWatch from "./screens/digitalwatch/DigitalWatch";

function App() {
  return (
    <div className="max-auto max-w-[1536px]">
      <BrowserRouter>
        <Provider store={store}>
          <div className="fixed top-5 left-10 z-50 ">
            <Link to={"/"}>
              <img src="vite.svg" alt="logo" className="drop-shadow-2xl" />
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/todo/new" element={<NewTodo />} />
            <Route path="/todo/update/:id" element={<UpdateTodo />} />
            <Route path="/dynamic-form" element={<DynamicFrom />} />
            <Route path="/accordion" element={<Accordion />} />
            <Route path="/infinite-scroll" element={<InfiniteScroll />} />
            <Route path="/no-internet" element={<NoInternet />} />
            <Route path="/progress" element={<ProgressBar />} />
            <Route path="/stopwatch" element={<Stopwatch />} />
            <Route path="/digital-watch" element={<DigitalWatch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

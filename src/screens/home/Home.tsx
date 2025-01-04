import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center my-5">
        React Practice Apps
      </h1>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[60%] p-5 rounded-md flex flex-wrap justify-center items-center gap-2 mt-2 bg-indigo-600/10">
          <Link to={"/todo"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Todo App
            </button>
          </Link>
          <Link to={"/dynamic-form"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Dynamic Form
            </button>
          </Link>
          <Link to={"/accordion"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Accordian
            </button>
          </Link>
          <Link to={"/infinite-scroll"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Infinite Scroll
            </button>
          </Link>
          <Link to={"/drag-and-drop"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Dran and Drop
            </button>
          </Link>
          <Link to={"/no-internet"}>
            <button className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              No Internet
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

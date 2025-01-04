import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-around bg-gradient-to-tl from-[#09071d] to-[#021149]">
      <div>
        <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-blue-600  to-pink-700 font-bold text-transparent backdrop-blur-md text-center py-5">
          React Gallary
        </h1>

        <div className="flex justify-center">
          <div className="w-[90%] md:w-[60%] p-5 rounded-md flex flex-wrap justify-center items-center gap-2 mt-2 bg-indigo-500/10 backdrop-blur-md border border-indigo-100/10 shadow-lg">
            <Link to={"/todo"}>
              <button className="bg-indigo-500/20 hover:bg-indigo-500/40 duration-300 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white">
                Todo App
              </button>
            </Link>
            <Link to={"/dynamic-form"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                Dynamic Form
              </button>
            </Link>
            <Link to={"/accordion"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                Accordian
              </button>
            </Link>
            <Link to={"/infinite-scroll"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                Infinite Scroll
              </button>
            </Link>
            <Link to={"/drag-and-drop"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                Dran and Drop
              </button>
            </Link>
            <Link to={"/no-internet"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                No Internet
              </button>
            </Link>
            <Link to={"/progress"}>
              <button className="bg-indigo-500/20 backdrop-blur-lg border border-indigo-100/20 shadow-lg h-8 w-32 flex justify-center items-center rounded-md text-white hover:bg-indigo-500/40 duration-300">
                Progress bar
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ---> TheAbhi Patel Logo */}
      <div className=" text-center">
        <h1 className="bg-gradient-to-r from-orange-700 via-orange-500 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent sm:text-8xl">
          TheAbhiPatel
        </h1>
      </div>
    </div>
  );
};

export default Home;

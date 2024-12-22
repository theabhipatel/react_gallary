import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center my-5">
        React Practice Apps
      </h1>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[60%] p-5 rounded-md flex justify-center items-center gap-2 mt-2 bg-indigo-600/10">
          <Link to={"/todo"}>
            <div className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
              Todo App
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

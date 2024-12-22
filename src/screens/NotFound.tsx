import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-5xl leading-loose bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center my-5">
        404 Page Not Found.
      </h1>
      <Link to={"/"}>
        <div className="bg-indigo-500/90 h-8 w-32 flex justify-center items-center rounded-md text-white">
          Go To Home
        </div>
      </Link>
    </div>
  );
};

export default NotFound;

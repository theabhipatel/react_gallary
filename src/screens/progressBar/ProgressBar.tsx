import { useEffect, useState } from "react";
import { verify } from "../../assets/images";

const ProgressBar = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("timer is running ...");
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-3">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2 ">
          Progress bar
        </h1>
        <div>
          <div className="w-full relative h-96 bg-indigo-200/10 flex justify-center items-center">
            {/* ---> Progress bar  */}
            <div className="w-80 h-5 rounded-full bg-gray-500/30">
              <div
                style={{ width: `${progress}%` }}
                className="h-full  bg-indigo-500 rounded-full duration-300"
              />
            </div>

            {progress === 100 && (
              <div className="absolute inset-0 bg-indigo-950/50 flex flex-col justify-center items-center duration-1000">
                <img src={verify} alt="" className="h-52 w-52 " />
                <h1 className="text-3xl font-bold text-white">Done</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;

import { useEffect, useState } from "react";
import { wifi, wifiSlash } from "../../assets/images";

const NoInternet = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    /** Attaching event listener. */
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    /** Cleaning event listener. */
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-3">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2 ">
          No internet
        </h1>

        <div className="w-full h-96 bg-indigo-200/10">
          {!isOnline ? (
            <div className="flex h-full justify-center items-center flex-col">
              <img
                src={wifiSlash}
                alt="no internet connection"
                className="w-52 h-52"
              />
              <h1 className="text-3xl text-red-600">No Internet Connection</h1>
              <p className="">
                Please check your internet connection and try again.
              </p>
              <button
                onClick={handleReload}
                className="bg-indigo-500 text-white px-5 py-1 rounded-md mt-5"
              >
                Reload
              </button>
            </div>
          ) : (
            <div className="flex h-full justify-center items-center flex-col">
              <img src={wifi} alt="online" className="w-52 h-52" />
              <h1 className="text-3xl text-green-600">You are online!</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoInternet;

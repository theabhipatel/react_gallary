import { useEffect, useState } from "react";

const DigitalWatch = () => {
  const [time, setTime] = useState("00:00:00");
  const [is12HourFormat, setIs12HourFormat] = useState(true);

  useEffect(() => {
    let timerId = setInterval(() => {
      handleSetTime();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [is12HourFormat]);

  const handleSetTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let amPm = "";
    if (is12HourFormat) {
      amPm = hours > 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
    }

    setTime(
      `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${
        is12HourFormat ? amPm : ""
      }`
    );
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-3">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2 ">
          Digital Watch
        </h1>
        <div className="h-full flex justify-center items-center">
          <p className="text-5xl font-bold text-indigo-500">{time}</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setIs12HourFormat((prev) => !prev)}
            className="bg-indigo-500 px-4 py-1 rounded-md text-white"
          >
            {is12HourFormat ? "24 Hours Format" : "12 Hours Format"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalWatch;

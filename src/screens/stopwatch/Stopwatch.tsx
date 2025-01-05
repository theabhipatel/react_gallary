import { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const timerId = useRef<NodeJS.Timeout | null>(null);
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(0);
  const [time, setTime] = useState("00:00:00");

  // Cleanup when the component unmounts
  useEffect(() => {
    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
        timerId.current = null;
      }
    };
  }, []);

  useEffect(() => {
    setTime(
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}`
    );
  }, [seconds, minutes, hours]);

  const handleStartStopwatch = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
  };

  const stopStopWatch = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
      timerId.current = null; // Ensure timer doesn't restart
    }
  };

  const resetStopWatch = () => {
    stopStopWatch();
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setTime("00:00:00");
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="flex w-[90%] min-h-56 bg-gray-100 rounded-md flex-col gap-2 p-3">
        <h1 className="text-2xl bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 font-bold text-transparent text-center mb-2">
          Stop Watch
        </h1>

        <div className="flex h-full justify-center items-center text-5xl font-bold">
          <p>{time}</p>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          {timerId.current ? (
            <button
              onClick={stopStopWatch}
              className="px-4 py-2 bg-yellow-500 text-white rounded"
            >
              Stop
            </button>
          ) : (
            <button
              onClick={handleStartStopwatch}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Start
            </button>
          )}

          <button
            onClick={resetStopWatch}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

import React, { useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startFun = () => {
    if (intervalId) return;
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopFun = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  const resetFun = ()=>{
    setCount(0)
    clearInterval(intervalId)
    setIntervalId(null);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">⏱ Counter with Start/Stop/Reset</h1>
      <p className="text-xl text-center font-bold mb-4">Count: {count} s</p>
      <div className="flex items-center justify-center gap-3">
        <button onClick={startFun} className="cursor-pointer px-6 py-2 rounded bg-green-500">
          Start
        </button>
        <button onClick={stopFun} className="cursor-pointer px-6 rounded  text-amber-50 py-2 bg-yellow-950">
          Stop
        </button>
        <button onClick={resetFun} className="cursor-pointer rounded px-6 py-2 bg-red-500">Reset</button>
      </div>
    </div>
  );
};

export default Timer;

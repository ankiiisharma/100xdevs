import { useState, useEffect } from "react";

function useInterval(fn, timeout) {
  useEffect(() => {
    setInterval(() => {
      fn();
    }, timeout);
  }, []);
}

function TimerBased() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return (
    <>
      <h2> Timer is {count} </h2>
    </>
  );
}

export default TimerBased;

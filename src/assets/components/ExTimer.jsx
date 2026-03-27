
import { useState, useEffect } from "react";

const Time = () => {
  const [count, setCount] = useState(0);
  const [running, setRunnig] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((time) => time + 1)
      },1000)
    }

    return () => clearInterval(interval)
  }, [count, running])

  const reset = () => {
    setCount(0)
    setRunnig(false)
  }

  return (
    <div>
      <h1>타이머 : {count}</h1>
      <button type="button" onClick={() => setRunnig(true)}>시작</button>
      <button type="button" onClick={() => setRunnig(false)}>정지</button>
      <button type="reset" onClick={reset}>초기화</button>
    </div>
  )

}
export default Time



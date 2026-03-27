
import { useState, useEffect } from "react";

// 1. 시작버튼 클릭 -< 10초 부터 카운트다운
// 2. 0초가 되면 자동 완료
// 3. 초기화 버튼으로 리셋

const CountDown = () => {
  const [count, setCount] = useState(10);
  const [running, setRunnig] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(()=>{
    let timer;

    if (running && count > 0) {
      timer = setInterval(() => {
        setCount(pCount => pCount -1)
      },1000)
    } else if (count === 0 && running) {
      setCompleted(true)
      setRunnig(false)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [running, count]);

  const start = () => {
    if (count > 0 && !running) {
      setRunnig(true)
      setCompleted(false)
    }
  }

  const reset = () => {
    setCount(10)
    setRunnig(false)
    setCompleted(false)
  }

  return (
    <div>
      <h2>카운트다운</h2>
      <h3>{count}초</h3>
      {completed && <h3>완료!</h3>}
      
      <button type="button" onClick={start}>시작</button>
      <button type="button" onClick={reset}>리셋</button>
    </div>
  )
}
export default CountDown
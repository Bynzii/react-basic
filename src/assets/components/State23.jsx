
import {useState} from "react";

{/* ✅ State2 */}
function State2() {
  let [count, setCount] = useState(0);
  let p = () => {setCount(count + 1)};
  let m = () => {setCount(count - 1)};

  return (
    <div>
      <h2>count: {count}</h2>
      <button type="button" onClick={m}>빼기 -1</button>
      <button type="button" onClick={() => p()}>더하기 +1</button>
    </div>
  )

  {/*
    
    ✅ state +,- 연습
    - useState로 count 상태 관리
    - 더하기/빼기 버튼으로 상태 업데이트
    
    ✅ 함수를 별도로 선언해서 onClick에 전달
    - onClick={p} : 클릭시 p함수 실행
    - onClick={() => p()} 와 동일하지만 더 간결하게 작성 
  
  */}
}


{/* ✅ State3 */}
function State3() {
  let [count, setCount] = useState(0);
  let p = () => {setCount(count + 1)};
  let m = () => {setCount(count - 1)};
  let r = () => {setCount(0)};
  
  return (
    <div>
      <h2>count: {count}</h2>
      <button type="button" onClick={m}>1 빼기</button>
      <button type="button" onClick={r}>초기화</button>
      <button type="button" onClick={p}>1 더하기</button>
    </div>
  )


  {/*

    ❌ let r = () => {setCount(count = 0)};
    - React에서 상태는 직접 변경하면 안됨 (직접 상태를 건드리지 않는다는 원칙)
    - 일반 변수처럼 직접 할당 후 setCount에 넘김
    - count를 직접 0으로 바꾼 다음 setCount를 넘기는거라 좋지 않음 

    ✅ let r = () => {setCount(0)};
    -  setCount에 바로 0을 넘김
    - "상태를 0으로 바꿔줘" 라고 React한테 직접 전달

  */}
}

export  {State2, State3}

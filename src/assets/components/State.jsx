import React from "react";
import { useState } from "react";

function State() {
  let count = 0; 
  let [count2, setCount2] = useState(0);
  let plus = () => {
    count = count + 1;
    console.log(count + "count")

    setCount2(count2 + 1)
    console.log(count2 + "count2")
  }

  return (
    <div>
      <h2>count : {count}</h2>
      <h2>count2 : {count2}</h2>
      <button type="button" onClick={plus}>click!</button>
    </div>
  )

  
  {/*
    
    ✅ State : 상태 변수를 정의하고 업데이트를 하는데 사용.
    - useState를 쓰면 변경된 상태를  React에게 알려서 화면에 자동으로 반영됨
    - 일반 변수는 값이 바뀌어도 화면에 반영 안됨 > React가 모르기때문
    
    ✅ let [state, setState] = useState(상태의 초기값)
    state : 현재 상태값 / 일반 변수처럼 변경 X
    setState : 바뀐 값 / 상태를 업데이트하기 위한 함수 > 비동기적으로 동작
    
    ✅ count(일반 변수) 
    - 값이 바뀌지만 React가 모름 (화면을 다시 그려야함을 모름)
    - 콘솔에 찍히지만 화면에는 변화 없음
    - 버튼을 클릭할 때마다 컴포넌트가 다시 실행 -> count = 0으로 초기화 -> 1만 노출
    
    ✅ count2(useState)
    - setCount2 를 호출하면 React한테 "상태가 바뀜" 알려줌
    - React가 화면을 다시 그림 -> 화면에 적용됨 
    
    -----------------------------------------------------------------------------

    1. 버튼을 클릭 (onClick={plus}) 
    2. count + 1해서 1이 됨
    3. setState 함수 호출 -> console실행
    4. plus 함수 종료
    5. 컴포넌트 함수가 다시 실행 : 리렌더
    6. 일반변수는 다시 초기화로 '0'이됨 

  */}
}
export default State
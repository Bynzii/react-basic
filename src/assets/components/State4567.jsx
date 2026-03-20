
import {useState} from "react";
import '../css/State.css'


{/* ✅ State4 ('') : 텍스트 입력 표시  */}
function State4() {
  let [text, setText] = useState('');
  let change = (e) => { setText(e.target.value) };

  return (
    <div className="cont">
      <input 
        type="text" 
        value={text}
        placeholder="텍스트를 입력하세요"
        onChange={change}
        // onChange={(e) => setText(e.target.value)}
      />
      <p>입력한 내용 : {text}</p>
    </div>
  )

  {/* 
    1. 초기값 빈 문자열 ('')로 시작
    2. value 속성 input의 값을 상태와 연결
    3. onChange 이벤트 입력이 변경될때마다 실행
    4. e.target.value : 현재 input에 엽력된 값 setText 업데이트
  */}
}


{/* ✅ State5 (true,false) : boolean */}
function State5() {
  let [btn, setBtn] = useState(false);
  let change = () => {setBtn(!btn)};

  return (
    <div className="cont">
      <h1>상태: {btn ? 'on' : 'off'}</h1>
      <button type="button" onClick={change}>토글</button>
    </div>
  )
  
  {/*
    ✅ 불리언 상태 : true/false 다루는 상태
    - btn 현재값의 반대로 전환 하는 함수 -> (!부정연산자)

    ✅ 삼항연산자 : { 조건 ? 참 : 거짓 }
    - 삼항연산자를 활용하여 조건부 렌더링
  */}
}


{/* ✅ State6 : 클래스 이름 조건부 렌더링  */}
function State6() {
  let [bg, setBg] = useState(true);
  console.log(bg)

  return (
    <div className="cont">
      <div className={`box ${bg ? 'blue' : 'red'}`}>컬러 박스</div>
      <button type="button" onClick={() => setBg(!bg)}>색상 변경</button>
    </div>
  )

  {/*
    ✅ 인라인으로 바로 함수 실행 : onClic={() => setBg(!bg)}

    ✅ !부정연산자 : 토글 사용시 필요
        - ❌setState(true / false) -> 현재 값 그래도 넣는것
        - 바뀌는 값(!토글) -> !false = true / !true = false
  */}
}


{/* ✅ State7 : 다크모드  */}
function State7() {
  let [dark, setDark] = useState(false);
  let modeChange = () => {setDark(!dark)}
  
  return (
    <div className="cont"> 
      <div className={`mode ${dark ? 'dark' : 'light'}`}>
        <h2>시스템 모드 연습</h2>
        <p>현재 모드 : {dark? '다크모드' : '라이트모드'}</p>
        <button type="button" onClick={modeChange}>모드 전환</button>
      </div>
    </div>
  )
}



export { State4, State5, State6, State7 }
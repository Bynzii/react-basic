// import { useState } from 'react'

// import Props from './assets/components/Props'
// import State from './assets/components/State'
// import {State2, State3} from './assets/components/State23'
// import {State4, State5, State6, State7} from './assets/components/State4567'
// import State8 from './assets/components/State8'
// import State9 from './assets/components/State9'
// import {State10,State11,State12} from './assets/components/State10'
// import StateMenu from './assets/components/StateMenu'
// import Game from './assets/components/StateGame'
// import Ex1 from './assets/components/Ex1'
// import Ex2 from './assets/components/Ex2'
// import ExTimer from './assets/components/ExTimer'
import CountDown from './assets/components/ExTimer2'


import './App.css'

function App() {

  return(
    <>
      {/* 📍 각 파일 안에 있는 함수(컴포넌트)가 실행되는 것 */}

      {/* <Props /> */}
      {/* <State /> */}

      {/* ✅ State2,3 : -,+,초기화 버튼 */}
      {/* <State2 /> <State3 /> */}

      {/* ✅ 4.텍스트 입력표시 / 5.토글버튼,삼항연산자(조건부 렌더링) / 6.클래스이름 조건부렌더링 / 7.다크모드 */}
      {/* <State4 /><State5 /><State6 /><State7 /> */}

      {/* ✅ 상태 업데이트 + 외부함수 */}
      {/* <State8 /> */}

      {/* ✅ 투두리스트(간단) */}
      {/* <State9 /> */}

      {/* ✅ 로그인 상태관리 */}
      {/* <State10 /> <State11 /> <State12 /> */}

      {/* ✅ 메뉴판 */}
      {/* <StateMenu/> */}

      {/* ✅ 가위바위보 게임 */}
      {/* <Game /> */}

      {/* ✅ 가위바위보 게임 */}
      {/* <Ex1 /> */}

      {/* ✅ useEffect */}
      {/* <Ex2/> */}

      {/* ✅ 타이머 */}
      {/* <ExTimer/> */}
      <CountDown />





    </>
  )
}

export default App

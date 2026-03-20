
import {useState} from "react";
import '../css/State.css'

// ✅ 상태업데이트 -> 다른 값 전달 / 나중에 "탭전환"으로 사용가능
function State8() {
  let [color, setColor] = useState('');
  let colorChange = (scolor) => {setColor(scolor)};  

  return (
    <div className="cont">
      <h2>선택한 색상 : {color}</h2>
      {/* 
      <button type="button" onClick={() => setColor('빨강')}>빨강</button>
      <button type="button" onClick={() => setColor('파랑')}>파랑</button>
      <button type="button" onClick={() => setColor('초록')}>초록</button> 
      */}
      
      {/* 외부함수 */}
      <button type="button" onClick={() => colorChange('빨강')}>빨강</button>
      <button type="button" onClick={() => colorChange('파랑')}>파랑</button>
      <button type="button" onClick={() => colorChange('초록')}>초록</button>
    </div>
  )

  {/*
    ❌ 렌더링되자마자 실행
    onClick={colorChange('초록')}

    ✅ 클릭할때만 실행
    onClick={() => colorChange('초록')}
  */}
}


//✅ 외부 함수
function State9() {

}


export default State8
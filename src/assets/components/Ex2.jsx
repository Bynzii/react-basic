
import { useState, useEffect } from "react";

const Ex2 = () => {
  let num = 0;
  const [count, setCount] = useState(0);
  console.log("생성")
  const [box, setBox] = useState(100);
  
  const plus = () => {
    setCount(count + 1)
    num = num + 1
  }

  const boxPlus = () => {
    setBox(box + 10)
  }

  //api호출
  useEffect(() => {
    console.log("useEffect")
  },[]);

  useEffect(() => {
    console.log("useEffect-2", count,box)
  },[count,box]);

  return (
    <div>
      {console.log("render")}
      <h3>num: {num}</h3>
      <h3>count: {count}</h3>
      <h3>count: {count}</h3>
      <button type="button" onClick={plus}>카운트 증가</button>
      <h3>box: {box}</h3>
      <button type="button" onClick={boxPlus}>박스 증가</button>
    </div>
  )

}

export default Ex2
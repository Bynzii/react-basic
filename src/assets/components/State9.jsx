
// ✅ 투두리스트 - 간단 
import { useState } from "react";
import '../css/State.css';

function State9() {
  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  const add = () => {
    if(text.trim()){
      setTodo([...todo, text]);
      setText('');
      console.log(todo)
    } else {
      alert("입력칸을 확인해주세요")
    }
  }
  
  const dellTodo = (index) => {
    let newTodo = todo.filter((_,idx) => idx !== index);
    setTodo(newTodo)
  }

  return (
    <>
      <div className="u_fxBetween g20">
        <input 
          type="text" 
          placeholder="입력하세용"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          />
        <button type="button" onClick={add}>추가</button>
      </div>

      <ul className="mt20">
        {todo.map((item,idx) => (
          <li key={idx}>
            {item}
            <button type="button" className="delBtn" onClick={() => dellTodo(idx)}>삭제</button>
          </li>
          ))}
      </ul>
    </>
  )

}
export default State9

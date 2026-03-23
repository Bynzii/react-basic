
import { useState } from "react";
import '../css/State.css'

// ✅ 로그인 상태관리 : 조건부 렌더링
function State10() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState('');

  const logOut = () => {
    setIsLogin(false);
    setUser('');
  }

  return (
    <div className="cont">
      {isLogin ? (
        <div>
          <h2>환영합니댕~ {user}님!</h2>
          <button type="button" onClick={logOut}>로그아웃</button>
        </div>
      ) : (
        <div>
          <h2>로그인이 필요합니다.</h2>
          <div className="u_fxBetween g20">
            <input 
              type="text" 
              placeholder="아이디"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setIsLogin(true)}
              />
            <button type="button" onClick={() => setIsLogin(true)}>로그인</button>
          </div>
        </div>
      )}
    </div>
  )

  {/*
    ✅ 조건부 렌더링 : { state ? (true시 실행되는 내용) : (false시 실행되는 내용}
        - "state가 참이면 ? 왼쪽 실행 : 아니면 오른쪽 실행"
        - 초기값을 false로 두었기 때문에 오른쪽내용이 첫화면
        - logOut ()=> : setLogin(false), setUer('') 거짓, 빈문자열 
  */}
}


// ✅ 좋아요
function State11() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(33);

  const btnClick = () => {
    if(like) {
      setLike(false)
      setCount(count -1) 
    } else {
      setLike(true)
      setCount(count +1)
    }
  }

  return (
    <div className="cont">
      <button type="button" onClick={btnClick}>
        {like ? '❤️' : '🤍'}
      </button>
      <p>좋아유 :{count}</p>
      {like && (<p>감사합니다</p>)}
    </div>
  )
}


// ✅ 숫자 맞추기 게임
function State12() {
  //지연 초기화 : 함수로 감싸면서 처음 마운트될때 딱 한번만 실행 > 정답이 고정됨
  const [answer] = useState(() => Math.floor(Math.random() * 10) +1);
  const [guess, setGuess] = useState('');
  const [msg, setMsg] = useState('');
  const [count, setCount] = useState(0);

  const check = () => {
    const num = parseInt(guess);
    setCount(count + 1);

    if (num === answer) {
      setMsg(`정답입니다!! ${count +1}번 만에 맞춤!!`)
    } else if(num < answer) {
      setMsg(`up!!`)
    } else {
      setMsg(`down!!`)
    }
    setGuess('')
  }

  return (
    <div className="cont u_fxBetween">
      {msg && <h2 className="fx1">{msg}</h2>}
      <p className="fx1">시도 횟수 : {count}</p>
      <input  className="fx1"
        type="text"
        value={guess}
        placeholder="1~10까지의 숫자를 입력"
        onChange={(e) => setGuess(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && check()}
      />
      <button type="button" className="btn" onClick={check}>
        확인
      </button>
    </div>
  )
}





export { State10, State11, State12 }
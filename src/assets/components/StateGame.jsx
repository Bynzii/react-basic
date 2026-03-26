
import { useState, useEffect } from "react";
import Box from "./StateGameBox";
import '../css/State.css'

const games = {
  rock : {name:'바위', icon: '✊🏻'},
  scissors : {name:'가위', icon: '✌🏻'},
  paper : {name:'보', icon: '✋🏻'}
}

const Game = () => {
  // 이것들을 가공해서 Box에 넘김
  const [user, setUser] = useState(null);
  const [com, setCom] = useState(null);
  const [result, setResult] = useState('');

  const play = (choice) => {
    // 1. 내가 선택한것 저장
    setUser(games[choice]);

    // 2. 컴퓨터가 랜덤으로 선택 저장
    const comCh = randomCh();
    setCom(comCh);

    // 3. 누가 이겼는지 판정 후 저장
    setResult( win(games[choice], comCh) )
  }

  // 같으면 무승부, 바위, 가위, 보
  const win = (user, com) => {
    if (user.name === com.name) {
      return "무승부!!"
    } else if (user.name === "바위") {
      return com.name === "가위" ? "승" : "패"
    } else if (user.name ==="가위") {
      return com.name === "보" ? "승" : "패"
    } else if (user.name === "보") {
      return com.name === "바위" ? "승" : "패"
    }
  }

  //
  const randomCh = () => {
    const gameArray = Object.keys(games);
    const randomItem = Math.floor(Math.random() * 3);
    const final = gameArray[randomItem];
    return games[final]
  }

  return (
    <div>
      <div className="allbox u_fxCenter g40">
        <Box name="사용자" item={user} result={result} />
        <Box name="컴퓨터" item={com} result={result} />
      </div>

      <div className="btnbox u_fxCenter g20">
        <button type="button" onClick={() => play("scissors")}>가위</button>
        <button type="button" onClick={() => play("rock")}>바위</button>
        <button type="button" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  )


}
export default Game

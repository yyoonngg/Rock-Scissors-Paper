import { useState, useTransition } from "react";
import "./App.css";
import Box from "./component/Box.js"

//1. 박스 2개(타이틀, 사진, 결과)
//2. 가위바위보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 보임
//4. 컴퓨터는 랜덤하게 아이템 선택
//5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패 결과에 따라 테두리 색이 바뀐다(이기면-초록, 지면-빨강, 비기면-검은색)

const choice ={
  rock:{
    name:"Rock",
    img:"http://isweb.joongbu.ac.kr/~jgm/photo/rock.jpeg"
  },
  scissors:{
    name:"Scissors",
    img:"http://isweb.joongbu.ac.kr/~jgm/photo/sissor.jpeg"
  },
  paper:{
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("Tie");

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(choice[computerChoice]);
    setResult(judgement(choice[userChoice], choice[computerChoice]));
  }

  const judgement=(user, computer)=>{
    if(user.name == computer.name){
      return "Tie";
    }else if(user.name=="Rock") return computer.name=="Scissors"?"Win":"Lose";
    else if(user.name=="Scissors") return computer.name=="Paper"?"Win":"Lose";
    else if(user.name=="Paper") return computer.name=="Rock"?"Win":"Lose";
  }

  const randomChoice=()=>{
    let objectArray = Object.keys(choice);
    let random = Math.floor(Math.random()*objectArray.length);
    let final = objectArray[random];
    return final;
  }
 return (
    <div className="main">
      <div className="board">
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>

      <div>
        <button onClick={()=>{play("rock")}}><i class="fa-solid fa-hand-back-fist"></i></button>
        <button onClick={()=>{play("scissors")}}><i class="fa-solid fa-hand-scissors"></i></button>
        <button onClick={()=>{play("paper")}}><i class="fa-solid fa-hand"></i></button>
      </div>
      <h1>{result}</h1>
    </div>
    
  );
}

export default App;

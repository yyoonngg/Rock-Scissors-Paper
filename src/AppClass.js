import React, { Component } from 'react'
import BoxClass from './component/BoxClass';
import "./App.css";

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
export default class AppClass extends Component {
    constructor(props) {
        super(props);
        this.state ={
            userSelect : "",
            computerSelect : "",
            result : ""
        };
    };

    play = (userChoice) => {
        this.setState({userSelect: choice[userChoice]});
        let computerChoice = this.randomChoice();
        this.setState({computerSelect: choice[computerChoice]});
        this.setState({result: this.judgement(choice[userChoice],choice[computerChoice])});
    };

    judgement = (user, computer) =>{
        if(user.name == computer.name){
            return "Tie";
          }else if(user.name=="Rock") return computer.name=="Scissors"?"Win":"Lose";
          else if(user.name=="Scissors") return computer.name=="Paper"?"Win":"Lose";
          else if(user.name=="Paper") return computer.name=="Rock"?"Win":"Lose";
    };

    randomChoice = () => {
        let objectArray = Object.keys(choice);
        let random = Math.floor(Math.random()*objectArray.length);
        let final = objectArray[random];
        return final;
    };
  render() {
    return (
      <div className="main">
      <div className="board">
        <BoxClass title="You" item={this.state.userSelect} result={this.state.result}/>
        <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result}/>
      </div>

      <div>
        <button onClick={()=>{this.play("rock")}}><i class="fa-solid fa-hand-back-fist"></i></button>
        <button onClick={()=>{this.play("scissors")}}><i class="fa-solid fa-hand-scissors"></i></button>
        <button onClick={()=>{this.play("paper")}}><i class="fa-solid fa-hand"></i></button>
      </div>
      <h1>{this.state.result}</h1>
    </div>
    
    )
  }
}


import React, { Component } from 'react'

export default class BoxClass extends Component {
    constructor() {
        super();
        this.result = "";
    }
    getResult = () => {
        if(
            this.props.title == "Computer" &&
            this.props.result !== "Tie" &&
            this.props.result !== ""
        ) {
            this.result = this.props.result === "Win"? "Lose" : "Win";
        }else{
            this.result = this.props.result;
        }
    };
  render() {
    this.getResult();
    return (
        <div className={`box ${this.result}`}>
            <h2>{this.props.title}</h2>
            <img src={this.props.item && this.props.item.img}/>
            <h4>{this.result}</h4>
        </div>
    )
  }
}

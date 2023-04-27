import React from 'react'

const Box = (props) => {
    let result = "";
    if(props.title === "Computer" 
    && props.result !== "Tie" 
    && props.result !== ""){
        result = props.result ==="Win"?"Lose":"Win";
    }else{
        result = props.result;
    }
  return (
    <div className={`box ${result}`}>
        <h2>{props.title}</h2>
        <img src={props.item && props.item.img}/>
        <h4>{result}</h4>
    </div>
  )
}

export default Box
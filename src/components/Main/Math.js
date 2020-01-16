import React from 'react';
import './main.css';
const Math = props => {
    const { onClick, clear } = props;
    return (
        <>
            <div>
                    <button className ="btn btn-secondary btn-lg testC" value="C" onClick={() => clear()}>C</button>
                    <button className ="btn btn-secondary btn-lg " value="/" onClick={(e) => onClick(e.target.value)}>/</button>
                    <br/>
                    <button className ="btn btn-secondary btn-lg " value="7" onClick={(e) => onClick(e.target.value)}>7</button>
                    <button className ="btn btn-secondary btn-lg " value="8" onClick={(e) => onClick(e.target.value)}>8</button>
                    <button className ="btn btn-secondary btn-lg " value="9" onClick={(e) => onClick(e.target.value)}>9</button>
                    <button className ="btn btn-secondary btn-lg " value="*" onClick={(e) => onClick(e.target.value)}>*</button>
                    <br/>
                    <button className ="btn btn-secondary btn-lg " value="4" onClick={(e) => onClick(e.target.value)}>4</button>
                    <button className ="btn btn-secondary btn-lg " value="5" onClick={(e) => onClick(e.target.value)}>5</button>
                    <button className ="btn btn-secondary btn-lg " value="6" onClick={(e) => onClick(e.target.value)}>6</button>
                    <button className ="btn btn-secondary btn-lg " value="-" onClick={(e) => onClick(e.target.value)}>-</button>
                    <br/>
                    <button className ="btn btn-secondary btn-lg one" value="1" onClick={(e) => onClick(e.target.value)}>1</button>
                    <button className ="btn btn-secondary btn-lg " value="2" onClick={(e) => onClick(e.target.value)}>2</button>
                    <button className ="btn btn-secondary btn-lg " value="3" onClick={(e) => onClick(e.target.value)}>3</button>
                    <button className ="btn btn-secondary btn-lg one " value="+" onClick={(e) => onClick(e.target.value)}>+</button>
                    <br/>
                    <button className ="btn btn-secondary btn-lg " value="0" onClick={(e) => onClick(e.target.value)}>0</button>
                    <button className ="btn btn-secondary btn-lg " value="," onClick={(e) => onClick(e.target.value)}>,</button>
                    <button className ="btn btn-secondary btn-lg equal" value="=" onClick={(e) => onClick(e.target.value)}>=</button>
                
                    <br/>
                </div>
        </>
    )
}

export default Math;
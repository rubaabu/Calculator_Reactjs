import React from 'react';
import Result from './Result';
import Math from './Math';
import './main.css'

export default class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            result: "",
           
        };
    };

    handleClick = e => {
      // if the btn is equal call calculate func if its not rerender the state with the pushed values
        if(e === "="){
                this.setState({
                result: (eval(this.state.result))
                })
        } else { 
           // first the stete will be empty and add value to it 
                // second click will be the value and the new clicked value
            this.setState({
                result: this.state.result + e
            })
        // console.log(e)
    }
}
   handleClear = () => {
       this.setState({
           result: ""
       })
   }
 
   

    render() {
        return(
            <div className="main">
            <h2>Fake Calculator</h2>
            <Result result={this.state.result}/>
            <Math onClick={this.handleClick} clear={this.handleClear}/>
            </div>
        )
    }
}
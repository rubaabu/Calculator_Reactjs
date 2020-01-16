import React from 'react';
import './main.css';

const Result = props => {
    const { result } = props;
    return <>
        <div className="result">
            <span>{result}</span><br/>

        </div>
    </>
}

export default Result;
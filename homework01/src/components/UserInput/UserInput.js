import React from 'react';

import './UserInput.css';

const userInput = (props) => {
    const inlineStyle = {
        display: 'block'
    }

    return (
        <div style={inlineStyle}>
            <input className="StylizedInput" onChange={props.changeEventHandler} value={props.defaultValue} />
        </div>
    );
    
}

export default userInput;
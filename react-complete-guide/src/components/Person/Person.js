import React from 'react';

import './Person.css';

const person = (props) => {
    if(props.render) {

        return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input onChange={props.changed} value={props.name} />
        </div> 
        );
    }
    
    return null;
}

export default person;
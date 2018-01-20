import React, { Component } from 'react';

class validationComponent extends Component {
    shortTextSize = 5
    
    validateLength = (text) => {
        if(text.length < 5) {
            return "Text too short";
        }

        return "Text long enough";
    }

    render() {
        return (<span>{this.validateLength(this.props.text)}</span>);
    }
}

export default validationComponent;
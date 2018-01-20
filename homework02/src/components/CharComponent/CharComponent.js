import React, {Component} from 'react';

class CharComponent extends Component {
    render() {
        const inlineStyle = {
            display: "inline-block",
            padding: "16px",
            textAlign: "center",
            margin: "16px",
            border: "1px solid black"
        }

        return (
            <div style={inlineStyle} onClick={this.props.deleteHandler}>{this.props.character}</div>
        );
    }
}

export default CharComponent;
import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './components/ValidationComponent/ValidationComponent';
import CharComponent from './components/CharComponent/CharComponent';

class App extends Component {

  state = {
    text: "",
    lengthOfText: 0
  }

  textChangeHandler = (event) => {
    const text = event.target.value;
    this.setState({
      text: text,
      lengthOfText: text.length
    });
  }

  deleteCharHandler = (index) => {
    const charArray = [...this.state.text];

    charArray.splice(index, 1);
    this.setState({
      text: charArray.join(''),
      lengthOfText: charArray.length
    });
  }

  renderChars = (text) => {
    const charArray = [...text.split('')];
    
    return (<div>
      {charArray.map((letter, index) => <CharComponent key={letter + index} character={letter} deleteHandler={() => this.deleteCharHandler(index)} />)}
    </div>)
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.textChangeHandler} value={this.state.text} />
        <p>{this.state.lengthOfText}</p>
        <ValidationComponent text={this.state.text} />
        {this.renderChars(this.state.text)}
      </div>
    );
  }
}

export default App;

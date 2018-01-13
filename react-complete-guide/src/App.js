import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  
  state = {
    personas: [
      {
        name: 'Luis!',
        age: 30
      },
      {
        name: 'Andres!',
        age: 32
      },
      {
        name: 'Daniela!',
        age: 26
      }
    ]
  }

  switchNamesHandler = (newName) => {
    this.setState({
      personas: [
        { name: 'Luis Fernando!', age: 30 },
        { name: 'Andres!', age: 32 },
        { name: newName, age: 27 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      personas: [
        { name: 'Luis Fernando!', age: 30 },
        { name: event.target.value, age: 32 },
        { name: 'Dani!!', age: 27 }
      ]
    });
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      padding: '8px',
      borderColor: 'blue',
      font: 'inherit',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app.</h1>
        <button 
          style={style}
          onClick={this.switchNamesHandler.bind(this, 'Daniela!')}>Switch Names </button>
        <Person name={this.state.personas[0].name} age={this.state.personas[0].age} />
        <Person 
          name={this.state.personas[1].name} 
          age={this.state.personas[1].age} 
          changed={this.nameChangeHandler}/>
        <Person 
          name={this.state.personas[2].name} 
          age={this.state.personas[2].age} 
          click={() => this.switchNamesHandler('Dani!!')}>My Hobbies are: Travel around the world!</Person>
      </div>
    );
  }
}

export default App;

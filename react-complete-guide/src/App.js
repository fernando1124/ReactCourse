import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {
  
  state = {
    persons: [ 
      { id: 'asda1', name: 'Luis!', age: 30 },
      { id: 'qwerty1', name: 'Andres!', age: 32 },
      { id: 'fhjf7', name: 'Daniela!', age: 26 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    const newPerson = { ...this.state.persons[personIndex] };
    newPerson.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = newPerson;
    
    this.setState({ persons: persons });
  }

  togglePersons = () => {
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  renderPersons(shouldRender) {
    if(shouldRender) {
      return (
        <div>
          { this.state.persons.map( (person, index) => {
            return <Person 
              render={true}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              click={() => this.deletePerson(index)}
              name={person.name} 
              age={person.age} />
          }) }          
        </div>
      );
    }

    return null;
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
          onClick={this.togglePersons.bind(this, 'Daniela!')}>Switch Names </button>
          <Person name="Fercho" age="30" render={false} />
          { this.renderPersons(this.state.showPersons) }    
      </div>
    );
  }
}

export default App;

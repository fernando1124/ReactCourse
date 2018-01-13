import React, { Component } from 'react';
import './App.css';

import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'default-username'
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          defaultValue={this.state.username}
          changeEventHandler={this.usernameChangeHandler} />
        <UserOutput username={this.state.username}/>
        <UserOutput username="unchangedUsername"/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "Andy"
  }

  changeUsernameHandler = event => {
    this.setState({username: event.target.value})
  }

  render() { 
    return (
      <div className="App">
        <UserInput name={this.state.username} change={this.changeUsernameHandler} />
        <UserOutput name={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
}
}

export default App;

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {
  render(){
  return (
    <div className="App">
      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo"></img>
        <h2>React Form Validation</h2>
      </div>
      <UserForm/>
    </div>
  );
}
}

export default App;

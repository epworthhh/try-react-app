import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  increaseCounter() {
    setInterval(() => this.setState({counter: this.state.counter + 1}), 1000);
  }

  componentDidMount() {
    this.interval = this.increaseCounter();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <p>Elapsed seconds counter: {this.state.counter}</p>
        </p>
      </div>
    );
  }
}

export default App;

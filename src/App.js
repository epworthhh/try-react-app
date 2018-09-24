import React, { Component } from 'react';
import TodoList from './components/TodoList.jsx';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.increaseMore = this.increaseMore.bind(this);

    this.state = {
      counter: 0
    };
  }

  increaseMore() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  increaseCounter() {
    setInterval(() => this.increaseMore(), 1000);
  }

  // lifecycle hooks
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
        <div className="App-intro">
          <p>Elapsed seconds counter: {this.state.counter}</p>
          <button onClick={this.increaseMore}>Faster!</button>
        </div>
        <div className="App-body"> 
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;

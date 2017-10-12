import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.increaseMore = this.increaseMore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.reverseItems = this.reverseItems.bind(this);

    this.state = {
      counter: 0,
      text: '',
      items: []
    };
  }

  increaseMore() {
    this.setState({counter: this.state.counter + 1});
  }

  increaseCounter() {
    setInterval(() => this.increaseMore(), 1000);
  }

  // event methods
  handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      text: this.state.text
    };

    this.setState({items: [newItem, ...this.state.items], text: ''});
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  removeItem(item) {
    const items = this.state.items.slice();
    const index = items.indexOf(item);
    items.splice(index, 1);

    this.setState({items});
  }

  reverseItems() {
    const items = this.state.items.slice();
    items.reverse();

    this.setState({items});
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
          <form onSubmit={this.handleSubmit}>
            <h3>TODO List</h3>
            <input onChange={this.handleChange} value={this.state.text} required/>
            <button>{'>> Add #' + (this.state.items.length + 1)}</button>
          </form>
          <ul>
            {this.state.items.map(item => (
              <li key={item.id}>
                {item.text}
                <button className="btn-close" onClick={() => this.removeItem(item)}>X</button>
              </li>
            ))}
          </ul>
          <div>
            {this.state.items.length > 0 && <button onClick={this.reverseItems}>Reverse list!</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

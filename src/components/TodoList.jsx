import React, { Component } from 'react';

class TodoList extends Component {
    
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.reverseItems = this.reverseItems.bind(this);

      this.state = {
        text: '',
        items: []
      };
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
      const items = this.state.items.reverse();

      this.setState({items});
    }
    
    
    render() {
      return (
        <div className="todoList">
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
      );
    }
  }

  export default TodoList;
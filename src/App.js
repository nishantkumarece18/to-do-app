import logo from './logo.svg';
import './App.css';
import React from 'react';
import ListItem from './ListItem';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text != "") {
      const newItems = [...this.state.items, newItem];
      // console.log(newItems);
      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
    // console.log(this.state.items)
  }

  deleteItem = (key) => {
    const temp = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: temp
    });
  }

  setUpdate = (text, key) => {
    const temp = this.state.items;
    temp.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: temp
    });
  }

  render() {
    return (
      <div className='App'>
        <header>
          <form id='to-do-form' onSubmit={this.addItem}>
            <input
              type='text'
              placeholder='Enter Text'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />

      </div>
    )
  }
}

export default App;

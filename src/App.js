import React, { Component } from 'react';
import './App.css';
import CheckboxWithLabel from './checkBoxWithLabel';
import SearchField from './searchField';
import Toggle from './toggle';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }
  handleCheckbox = () => {
    this.setState({toggle:!this.state.toggle})
  }
  render() {
    return (
      <div className="App">
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <SearchField />
        <Toggle status={this.state.toggle} handle={this.handleCheckbox} />
      </div>
    );
  }
}

export default App;

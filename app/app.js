import React, { Component } from 'react';

import Form from './form';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.numberChange = this.numberChange.bind(this);

    this.state = {
      number: 12
    }
  }

  render() {
    return (
      <Form number={this.state.number} onChange={this.numberChange} />
    );
  }

  numberChange(newNumber) {
    this.setState({ number: newNumber });
  }
}

import React, { Component } from 'react';

import Form from './form';
import NumberToRomanNumeral from './services/number_to_roman_numeral';

import styles from "./stylesheets/app.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.numberChange = this.numberChange.bind(this);

    this.state = {
      number: 12
    }
  }

  render() {
    const converter = new NumberToRomanNumeral(this.state.number);

    return (
      <div className="numeral-converter">
        <h1 className="numeral-converter--heading">Roman Numeral Converter</h1>
        <Form number={this.state.number} onChange={this.numberChange} />
        <p className="numeral-converter--preview">{converter.toRomanNumeral()}</p>
      </div>
    );
  }

  numberChange(newNumber) {
    if(newNumber > 3999)
      newNumber = 3999;

    this.setState({ number: newNumber });
  }
}

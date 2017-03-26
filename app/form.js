import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <input className="numeral-converter--field"
             type="number"
             value={this.props.number}
             onChange={e => this.props.onChange(+e.target.value)}
             max="3999" />
    );
  }
}

Form.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  number: React.PropTypes.number
}

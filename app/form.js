import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <input type="number" value={this.props.number} onChange={e => this.props.onChange(+e.target.value)} />
    );
  }
}

Form.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  number: React.PropTypes.number
}

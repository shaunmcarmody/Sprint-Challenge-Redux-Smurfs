import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Form from './Form/Form';
import Smurfs from './Smurfs/Smurfs';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    return (
      <div className="App">
        <Form />
        <Smurfs />
      </div>
    );
  }
}

export default connect(null, { getSmurfs })(App);

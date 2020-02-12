import React, { Component } from 'react';
import Form from '../Form/Form';
import ResContainer from '../ResContainer/ResContainer';
import './App.scss';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(resData => this.setState({ reservations: resData }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ResContainer reservations={this.state.reservations} />
      </div>
    )
  }
}
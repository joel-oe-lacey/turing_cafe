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

  addReservation = reservation => {
    const options = {
      method: 'POST',
      body: JSON.stringify(reservation),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/api/v1/reservations', options)
      .then(response => response.json())
      .then(postedRes => {
        this.setState({ reservations: [...this.state.reservations, postedRes] })
      })
  }

  deleteReservation = id => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
      .then(response => response.json())
      .then(remainingRes => {
        this.setState({ reservations: remainingRes })
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <ResContainer reservations={this.state.reservations} deleteReservation={this.deleteReservation}/>
      </div>
    )
  }
}
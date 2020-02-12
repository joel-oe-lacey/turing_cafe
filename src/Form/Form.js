import React, { Component } from 'react';
import './Form.scss'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            guestCount: ''
        }
    }

    updateResData = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitRes = e => {
        e.preventDefault();
        const { addReservation } = this.props;
        addReservation(this.state)
        this.resetInputs();
    }

    resetInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            number: ''
        })
    }

    render() {
        return (
            <form className="form">
                <input
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.updateResData}
                />
                <input
                    name="date"
                    placeholder="Date (mm/dd)"
                    value={this.state.date}
                    onChange={this.updateResData}
                />
                <input
                    name="time"
                    placeholder="Time"
                    value={this.state.time}
                    onChange={this.updateResData}
                />
                <input
                    name="number"
                    placeholder="Number of Guests"
                    value={this.state.number}
                    onChange={this.updateResData}
                />
                <button onClick={this.submitRes}>
                    Make Reservation
                </button>
            </form>
        )
    }
}
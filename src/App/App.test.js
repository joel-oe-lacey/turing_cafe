import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const mockStartReservations = [{
    id: '1',
    name: 'Arthur',
    date: '8/13',
    time: '8',
    number: '42'
  }, {
    id: '2',
    name: 'Trillian',
    date: '6/03',
    time: '4',
    number: '2'
  }]

  const mockNewReservation = {
    id: '3',
    name: 'Ford',
    date: '2/21',
    time: '9',
    number: '4'
  }

  it('Should update reservations with a new reservation when passed', () => {
    const expected = [...mockStartReservations, mockNewReservation]
    const wrapper = shallow(<App />);

    wrapper.instance().setState({ reservations: mockStartReservations })
    wrapper.instance().addReservation(mockNewReservation)

    expect(wrapper.state('reservations')).toEqual(expected)
  })
})
import React from 'react';
import { shallow } from 'enzyme';
import ResContainer from './ResContainer';

describe('ResContainer', () => {
    const mockReservation = {
        id: '3',
        name: 'Marvin',
        date: '3/14',
        time: '4',
        number: '7'
    }

    it('Should match snapshot', () => {
        const wrapper = shallow(<ResContainer reservations={[mockReservation]} />);
        expect(wrapper).toMatchSnapshot()
    })
})
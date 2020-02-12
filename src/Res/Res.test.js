import React from 'react';
import { shallow } from 'enzyme';
import Res from './Res';

describe('Res', () => {
    const mockReservation = {
        id:'1',
        name:'Arthur Dent',
        date:'8/13',
        time:'8',
        number:'42'
    }

    it('Should match snapshot', () => {
        const wrapper = shallow(<Res {...mockReservation} />);
        expect(wrapper).toMatchSnapshot()
    })
})
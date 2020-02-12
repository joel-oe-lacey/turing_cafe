import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
    const mockUserEntry = {
        name: 'Ford',
        date: '2/21',
        time: '9',
        number: '4'
    }

    const mockEmptyState = {
        name: '',
        date: '',
        time: '',
        number: ''  
    }

    it('Should return a reservation on form click', () => {
        const addResMock = jest.fn();
        const wrapper = shallow(<Form addReservation={addResMock}/>);
        const mockEvent = { preventDefault: jest.fn() }

        wrapper.instance().setState(mockUserEntry)
        wrapper.find('button').simulate('click', mockEvent)

        expect(addResMock).toHaveBeenCalledWith(mockUserEntry)
    })

    it('Should update state on user input entry', () => {
        const wrapper = shallow(<Form />);
        const mockEvent = {target: {name:'name', value: 'Arthur'}}
        
        wrapper.find('input').at(0).simulate('change', mockEvent)

        expect(wrapper.state('name')).toEqual('Arthur')
    })

    it('Should reset inputs after entry', () => {
        const wrapper = shallow(<Form />);

        wrapper.instance().setState({ ...mockUserEntry })
        wrapper.instance().resetInputs()

        expect(wrapper.state()).toEqual(mockEmptyState)
    })
})

//write a state change
    //reset inputs
//an on change of input
//a click on submit 
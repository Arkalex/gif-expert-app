import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should show it correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change input', () => {
        const input = wrapper.find('input');
        const value = 'Hello world';
        input.simulate('change', { target: {value} });

        expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
    test('should submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        })

        expect(setCategories).not.toHaveBeenCalled()
    })
    
    test('should call setCategories and clean input box', () => {
        const value = 'Hello world';

        //1- Simulate inputChange
        wrapper.find('input').simulate('change', {target: {value}});

        //2- Simulate submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        //3- Call setCategories
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    
        //4- Input value should be empty string
        expect(wrapper.find('input').prop('value')).toBe('');
    
    })
    
})
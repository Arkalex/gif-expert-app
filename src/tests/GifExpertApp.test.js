import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {
    test('should show correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should show a list of categories', () => {
        const categories = ['Dragon Ball', 'Kimetsu no Yaiba'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);


        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe(categories.length);
    })
    
})
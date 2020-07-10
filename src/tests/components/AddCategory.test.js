import React from 'react';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};

    test('should show it correctly', () => {
        const wrapper = shallow(<AddCategory setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();
    })
    
})
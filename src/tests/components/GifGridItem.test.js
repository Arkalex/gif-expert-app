import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem /> ', () => {

    const title = 'Titulo random';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem 
                                title={title} 
                                url={url} 
                            />);

    test('should show the component', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('should has a <p> with title', () => {
        
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(title);

    })

    test('should have an image with alt and url from props', () => {
        
        const img = wrapper.find('img');

        expect( img.prop('src')).toBe( url );
        expect( img.prop('alt')).toBe( title );
    })

    test('should have class animate_fadeIn', () => {

        const div = wrapper.find('div');

        const className = div.prop('className');
        expect( className.includes('animate_fadeIn') ).toBe( true );
        
    })
    
})
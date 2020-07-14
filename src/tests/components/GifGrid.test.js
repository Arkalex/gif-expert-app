import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en el <GifGrid />', () => {

    const category = 'Goku';
    test('should show correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow(<GifGrid category={category} />);

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should show items when img loaded with useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https:localhost',
            title: 'random'
        }]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow(<GifGrid category={category} />);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe(gifs.length);
    })
    
    
})
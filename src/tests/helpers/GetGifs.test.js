import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {

    test('should bring 10 items', async() => {
        
        const gifs = await getGifs('Goku');

        expect(gifs.length).toBe(10);

    })
    
})
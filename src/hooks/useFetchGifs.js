import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs()
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })
    }, [])
    return state;
}
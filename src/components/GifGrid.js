import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );
    

    return (
        <>
            <h3 className="animate_animated animate_fadeIn">{category}</h3>
            
            { loading && <p>Loading</p> }

            <div className="card-grid">
            {
                data.map((img) => {
                    return <GifGridItem 
                                key={ img.id }
                                { ...img } 
                            />
                })
            }
            </div>
        </>
    )
}

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'My Hero Academia', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Goku'])

    //const handleAdd = () => {
    //    setCategories( [...categories, 'Kimetsu No Yaiba'] );
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map( (category, i) => {
                        return <GifGrid 
                                    key={i}            
                                    category={category} 
                                />
                    })
                }
            </ol>
            {

            }
        </>
    )
}

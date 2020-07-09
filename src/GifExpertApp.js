import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

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

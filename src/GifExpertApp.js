import React, { useState } from 'react'

export const GifExpertApp = () => {
    //const categories = ['One Punch', 'My Hero Academia', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'My Hero Academia', 'Dragon Ball'])

    const handleAdd = () => {
        setCategories( [...categories, 'Kimetsu No Yaiba'] );
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            
            <button onClick={ handleAdd }>Añadir</button>

            <ol>
                {
                    categories.map( (category, i) => {
                        return <li key={i}>{ category }</li>
                    })
                }
            </ol>
            {

            }
        </>
    )
}

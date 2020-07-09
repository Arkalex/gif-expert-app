import React from 'react'

export const GifGridItem = ( { id, title, url } ) => {
    return (
        <div className="card animate_animated animate_fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

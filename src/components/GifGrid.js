import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__shakeX">{category}</h3>
            {loading && 'Cargando...'}
            <div className="card-grid animate__animated animate__flash">
                    { images.map((image) => <GifGridItem key={image.id} {...image} />) }
            </div>
        </>
    )
}

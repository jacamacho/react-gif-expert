import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const defaultCategories = ['Naruto'];
    const [categories, setCategory] = useState(defaultCategories);

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategory} />
            <hr />
            <ol>
                { categories.map((category) => <GifGrid key={category} category={category} />) }
            </ol>
        </>
    );
}

export default GifExpertApp;
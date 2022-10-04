import React from 'react';
import { useFetchCategories } from '../../hooks/useFetchCategories';

const Categories = () => {
    const { categories, error } = useFetchCategories("/categories/", []);
    
    return(
        <ul className='categories__list'>
            {error && <p>{error}</p>}
            {categories.map((category) => (
                <li className='categories__listItem'>
                    {category.name}
                </li>                
            ))}
        </ul>
    )
}

export default Categories;
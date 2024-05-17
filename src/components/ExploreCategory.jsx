import React from 'react';
import { category_list } from '../assets/assets';

const ExploreCategory = ({ category, setCategory }) => {
    return (
        <div>
            <h1>Explore the Categories</h1>
            <p>Choose from diverse range...</p>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-[30px] row-gap-[50px]'>
                {category_list.map((item, index) => (
                    <div key={index} onClick={() => setCategory(prev => prev === item.cat_name ? "All" : item.cat_name)}>
                        <img src={item.cat_img} alt={item.cat_name} />
                        <p>{item.cat_name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCategory;

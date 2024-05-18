import React from 'react';
import { category_list } from '../assets/assets';


const ExploreCategory = ({ category, setCategory }) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            <h1 className='font-medium text-slate-800'>Explore the Categories</h1>
            <p >Choose from diverse range...</p>
            <div className='flex justify-between items-center text-center my-[20px] gap-[30px] overflow-x-scroll hide-scrollbar'>
                {category_list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => setCategory(prev => prev === item.cat_name ? "All" : item.cat_name)}>
                            <img src={item.cat_img} alt={item.cat_name} />
                            <p>{item.cat_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ExploreCategory;

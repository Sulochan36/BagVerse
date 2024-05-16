import React, { useState } from 'react';
import BagDisplay from '../components/BagDisplay';
import ExploreCategory from '../components/ExploreCategory';


const Explore = () => {
    
    const[category,setCategory] =useState('All');


    return (
        <div>
            <ExploreCategory category={category} setCategory={setCategory}  />
            <BagDisplay category={category} />
        </div>
    )
}

export default Explore
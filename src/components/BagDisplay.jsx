import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import BagItem from './BagItem';

const BagDisplay = ({category}) => {

    const {bag_list} = useContext(StoreContext);



    return (
        <div className='mt-8'>
            <h2 className='font-semibold text-base'>Choose Your favouraite Bags...</h2>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-[30px] row-gap-[50px]'>
                {bag_list.map((item,index)=>{
                    if(category==="All" || category===item.category){
                        return <BagItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                    }

                    
                })}
            </div>
        </div>
    )
}

export default BagDisplay
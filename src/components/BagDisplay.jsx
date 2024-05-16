import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import BagItem from './BagItem';

const BagDisplay = ({category}) => {

    const {bag_list} = useContext(StoreContext);



    return (
        <div>
            <h2>Choose Your favouraite Bags...</h2>
            <div>
                {bag_list.map((item,index)=>{
                    return <BagItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default BagDisplay
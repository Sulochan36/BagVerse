import React, { useContext } from 'react'
import { add_icon_green, add_icon_white, remove_icon_red } from '../assets/photos';
import { StoreContext } from '../context/StoreContext';

const BagItem = ({ id, name, price, description, image }) => {

    
    const{cartItems,addToCart,removeFromCart} = useContext(StoreContext);


    return (
        <div className='w-full m-auto rounded-2xl shadow-xl transition duration-300 animate-[fadeIn_1s] '>
            <div className='relative'>
                <img className='w-full rounded-t-[15px]' src={image}  />
                {!cartItems[id]
                    ? <img className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full' onClick={()=>addToCart(id)} src={add_icon_white} />
                    :<div className='absolute bottom-4 right-4 flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
                        <img className='w-8'  onClick={()=>removeFromCart(id)} src={remove_icon_red} />
                        <p>{cartItems[id]}</p>
                        <img className='w-8' onClick={() => addToCart(id)} src={add_icon_green} />
                    </div>
                }
            </div>
            <div className='p-5'>
                <div className='flex justify-center items-center mb-[10px]'>
                    <p className='text-xl font-semibold'>{name}</p>
                    {/* <img src={asses} alt="" /> */}
                </div>
                <p className='text-gray-600 text-base'>{description}</p>
                <p className='text-blue-500 text-2xl font-bold my-[10px]'>${price}</p>
            </div>
        </div>
    )
}

export default BagItem
import React, { useContext } from 'react'
import {StoreContext} from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const {cartItems,bag_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

    const navigate = useNavigate();
    return (
        <div className='mt-[100px] m-10'>
            <div >
                <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray text-sm md:text-[max(1vw,12px)] " >
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {bag_list.map((item,index)=>{
                    if(cartItems[item._id]>0){
                        return(
                            <div>
                                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center m-3 text-black font-bold'>
                                    <img src={item.image} className='w-[100px]' />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                                </div>
                                <hr className='h-[1px] bg-gray-200 border-none' />
                            </div>
                            
                        )
                    }
                })}
            </div>
            <div className='class1 mt-[80px] flex justify-between' style={{ gap: "max(12vw, 20px)"}} >
                <div className='flex-1 flex flex-col gap-5'>
                    <h2 className='font-extrabold text-2xl'>Cart Totals</h2>
                    <div>
                        <div className='flex justify-between text-gray-700'>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr className='m-3' />
                        <div className='flex justify-between text-gray-700' >
                            <p>Delivery fee</p>
                            <p>${getTotalCartAmount()===0?0:2}</p>
                        </div>
                        <hr className='m-3' />
                        <div className='flex justify-between text-gray-700'>
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0:getTotalCartAmount()+2}</b>
                        </div>
                        
                    </div>
                    <button onClick={()=>navigate('/order')} className='border-0 text-white bg-blue-500 w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='class2 flex-1 '>
                    <div>
                        <p className='text-gray-700'>If you have promo code,Enter it here</p>
                        <div className='mt-3 flex justify-between items-center bg-slate-300 rounded-md'>
                            <input className='bg-transparent border-0 outline-none pl-3 ' type="text" placeholder='Promo Code' />
                            <button className='w-[max(10vx,150px)] py-3 px-5 border-none text-white bg-black rounded'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 750px) {
                    .class1 {
                        flex-direction: column-reverse;
                    }
                    .class2 {
                        justify-content: start;
                    }
                }
            `}</style>
        </div>
    )
}

export default Cart
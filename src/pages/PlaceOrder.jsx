import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import './PlaceOrder.css';

const PlaceOrder = () => {

    const{getTotalCartAmount} = useContext(StoreContext);


    return (
        <form className='flex items-start justify-between gap-[50px] mt-[100px]'>
            <div className='po-left w-full max-w-lg'>
                <p className='text-3xl font-semibold mb-[50px] '>Delivery Information</p>
                <div className='multifields '>
                    <input type="text" placeholder='First Name'/>
                    <input type="text" placeholder='Last Name'/>
                </div>
                <input type="email" placeholder='Email address' />
                <input type="text" placeholder='Street' />
                <div className='multifields'>
                    <input type="text" placeholder='City' />
                    <input type="text" placeholder='State' />
                </div>
                <div className='multifields'>
                    <input type="text" placeholder='Zipcode' />
                    <input type="text" placeholder='Country' />
                </div>
                <input type="text" placeholder='Phone' />
            </div>
        <div className='po-right w-full max-w-lg'>
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
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr className='m-3' />
                        <div className='flex justify-between text-gray-700'>
                            <b>Total</b>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>

                    </div>
                    <button  className='border-0 text-white bg-blue-500 w-[max(15vw,200px)] py-3 px-0 rounded cursor-pointer mt-8'>PROCEED TO PAYMENT</button>
                </div>

        </div>
            
        </form>
    )
}

export default PlaceOrder
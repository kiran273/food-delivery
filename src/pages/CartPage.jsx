import React, { useState } from 'react';
import { useAppContext } from '../components/AppContext';

const CartPage = () => {
    const { cart, removeFromCart } = useAppContext();
    const [quantities, setQuantities] = useState({});
    // const [showCheckout, setShowCheckout] = useState(false)

    const handleAdd = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }))
    }

    const handleRemove = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] > 1 ? prev[id] - 1 : 1)
        }))
    }
//total
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const quantity = quantities[item.id] || 1;
            return total + item.price.single * quantity;
        }, 0);
    };

    // const check = () =>{
    //     setShowCheckout(true)
    // }

    return (
        <>
            <div className="p-5 w-full flex flex-col items-center justify-center">
            <div className=' rounded bg-amber-50 border p-8'>
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-5 justify-between p-3 border-b">
                            <div>
                                <h2 className="text-[1rem] font-semibold">{item.biryani_name}</h2>
                                <p>Price: ₹{item.price.single}</p>
                            </div>
                            <div className='border px-2 py-1  flex gap-3.5 items-center outline-0 rounded bg-green-100'>
                                <button className='text-[0.9rem] cursor-pointer' onClick={() => handleRemove(item.id)}>-</button>
                                <span className='text-[0.9rem]'>{quantities[item.id] || 1}</span>
                                <button className=' cursor-pointer' onClick={() => handleAdd(item.id)}>+</button>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="px-3 py-1 bg-red-500 text-white rounded cursor-pointer hover:bg-red-400"
                            >
                                Remove
                            </button>
                        </div>

                    ))
                )}
                <div className='mt-5 flex justify-between'>
                    <div className=" text-xl font-bold">
                        Total Price: ₹{getTotalPrice()}
                    </div>
                    <div className='text-lg  border px-3 py-2 cursor-pointer hover:bg-black hover:text-white rounded'>
                        Check Out
                    </div>
                </div>
                </div>
            </div>

        </>
    );
};

export default CartPage;

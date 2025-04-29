import React from 'react'
import BiryaniData from '../components/data/BiryaniData'
import { useAppContext } from '../components/AppContext'

const Biryani = () => {
    const { addToCart } = useAppContext();
    return (
        <>
            <div className="pt-20 flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
                {BiryaniData.map((item, index) => (
                    <div key={index} className="w-72 bg-white rounded-2xl shadow-lg overflow-hidden">
                        {/* Image Section */}
                        <div className="relative">
                            <img className="w-full h-48 object-cover" src={item.image} alt={item.biryani_name} />
                        </div>

                        {/* Card Details */}
                        <div className="p-4">
                            {/* Hotel Name & Rating */}
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-bold">{item.hotel_name}</h2>
                                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">⭐ {item.rating}</span>
                            </div>

                            {/* Location */}
                            <p className="text-gray-500 text-sm">{item.place}</p>

                            {/* Price Section (Mapping Nested Object) */}
                            <p className="mt-2 font-semibold text-lg text-gray-800">
                                Single: {item.price.single} | Family Pack: {item.price.family_pack}
                            </p>

                            {/* Biryani Name */}
                            <p className="mt-2 text-gray-700">🍛 {item.biryani_name}</p>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-between">
                                <button onClick={()=>addToCart(item)} className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600">
                                    Add to Cart
                                </button>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Biryani;

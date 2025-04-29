import React from 'react'
import BiryaniData from '../components/data/BiryaniData'

const Biryani = () => {
    return (
        <>
            <div className="home flex items-center justify-center pt-[80px]">
                <div className="grid md:grid-cols-4 gap-4">
                    {
                        BiryaniData.map((item, index) => {
                            return (
                                <div key={index} className='rounded-lg shadow-lg bg-white w-72 m-2'>
                                    <div className="relative">
                                        <img
                                            className="w-full h-48 object-cover"
                                            src={item.image}
                                            alt="Restaurant"
                                        />
                                        {/* {item.promoted && (
                                            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                {item.promoted}
                                            </div>)
                                        } */}
                                    </div>

                                    {/* Content Section */}
                                    <div className="px-6 py-4">
                                        {/* Restaurant Name and Discount */}
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-lg font-semibold">{item.hotel_name}</div>
                                            {/* <div className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                {item.offer}
                                            </div> */}
                                        </div>

                                        {/* Cuisine Types */}
                                        <p className="text-gray-700 text-sm">{item.place}</p>

                                        {/* Rating Section */}
                                        <div className="flex items-center mt-2">
                                            <div className="flex items-center bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                                                <span>{item.rating}</span>
                                                <svg
                                                    className="w-4 h-4 ml-1"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-500 text-sm ml-2">(500+ ratings)</span>
                                        </div>

                                        {/* Price */}
                                        <div className="mt-4">
                                            <span className="text-gray-900 font-bold">{item.price}</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Biryani

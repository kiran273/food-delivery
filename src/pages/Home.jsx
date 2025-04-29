import React from 'react'
import '../pages/Home.css'
import Menu from './Menu';

const Home = () => {

  return (
    <>
      <div className="home-container mb-5 max-w-full mx-10 pt-8">
        <div className="filters flex gap-5">
          <button className='py-2 px-5 border-gray-400 text-gray-600'>Filters</button>
          <button className='py-2 px-5  border-gray-400 text-gray-600'>Pure Veg</button>
          <button className='py-2 px-5  border-gray-400 text-gray-600 '>Cuisines <i className="fa-solid fa-chevron-down ml-2"></i></button>
        </div>
      </div>
      <div className="menu bg-gray-100 p-8">
        <p className='text-3xl mb-5 font-bold flex justify-center '>Eat your favourite food</p>
        <Menu />
      </div>
    </>
  )
}

export default Home;

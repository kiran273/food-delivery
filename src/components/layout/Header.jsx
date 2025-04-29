import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';


const Header = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, cart } = useAppContext();
  console.log(searchTerm)

  return (

    <>
      <header className="header sticky z-50  top-0 bg-white shadow-md flex items-center justify-between px-8 py-2">
        <h1 className="w-3/12 text-3xl font-bold">
          FoodMawa
        </h1>
        <nav className="nav font-semibold text-lg">
          <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <Link to={"home"}>Home</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"restaurant"}>Restaurnts</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <Link to={"home"}>About</Link>
            </li>
          </ul>
        </nav>
        <div className="w-3/12 flex justify-center gap-10 items-center">
          <div className='cart' onClick={()=>navigate("cart")}>
            {cart.length > 0 && (
              <span className="absolute top-5  bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-sm">
                {cart.length}
              </span>
            )}
            <i className="fa-solid fa-cart-plus hover:text-green-500 duration-200 text-2xl"></i>
          </div>
          <div className="relative mr-3 md:mr-0 hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
            </div>
            <input type="text" id="email-adress-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2 outline-0"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;

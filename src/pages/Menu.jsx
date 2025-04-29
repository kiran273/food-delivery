import React from 'react'
import MenuList from '../components/MenuListData'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../components/AppContext';

const Menu = () => {
    const navigate = useNavigate();
    const { searchTerm } = useAppContext();

    const handleSearch = MenuList.filter((item)=>{
        return item.name?.toLowerCase().includes(searchTerm.toLowerCase());
    })

    const handleFoodItem = () =>{
        navigate("biryani")
    }
    return (
        <>
        {handleSearch.length > 0 ? (
            <div className='menu-cards flex flex-col items-center justify-center' onClick={handleFoodItem}>
            <div className='md:grid grid-cols-4 gap-10'>
            {handleSearch.map((item,index) => {
                return (
                    <div key={index} className='flex flex-col items-center gap-5 cursor-pointer'>
                        <div className="circle">
                            <img src={item.image} alt="image" className='w-50 h-50 rounded-full'/>
                        </div>
                        <span className='text-2xl font-semibold'>{item.name}</span>
                    </div>
                )
            })}
            </div>
        </div>
        ):(
            <div>
                <h1>no result found</h1>
            </div>
        )}
        </>
    )
}

export default Menu

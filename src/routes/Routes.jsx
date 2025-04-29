import React from 'react'
import Footer from '../components/layout/Footer'
import Headers from '../components/layout/Header'
import { Outlet } from 'react-router-dom'




const Routess = () => {
  return (
    <>
    <Headers />
    <Outlet/>
    <Footer />
    </>
  )
}

export default Routess

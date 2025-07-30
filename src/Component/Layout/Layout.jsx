import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import React from 'react'
import { Outlet } from "react-router-dom";

export default function Error() {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
    
  )
}

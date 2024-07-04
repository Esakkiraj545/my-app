import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
export default function Navlayout() {

  return (
    <div className='overflow-x-hidden'>
        <div>
        <nav className='d-flex align-items-center collapse navbar-collapse'>
            <div className='flex-grow-1'>
                <h1 className='ps-5 mb-0'>TURFY.</h1>
            </div>
            <ul className='d-flex gap-4 pe-5 mb-0'>
            <NavLink to="/" className="nav-link fw-medium">Home</NavLink>
            <NavLink to="/About" className="nav-link fw-medium">About</NavLink>
            <NavLink to="Booking" className="nav-link fw-medium">Booking</NavLink>
            <NavLink to="/Login" className="nav-link fw-medium">Login</NavLink>
            </ul>
        </nav>
        </div>
    </div>
  )
}

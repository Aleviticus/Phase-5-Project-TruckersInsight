import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <NavLink to='/api'>Home</NavLink>
                <NavLink to='/api/register/trucker' className='custom-link'>Trucker Signup</NavLink>
                <NavLink to='/api/register/company' className='custom-link'>Company Signup</NavLink>
                <NavLink to='/api/login/trucker' className='custom-link'>Trucker Login</NavLink>
                <NavLink to='/api/login/company' className='custom-link'>Company Login</NavLink>
            </ul>
        </nav>
    )
}
export default Navbar
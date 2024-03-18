import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/login/trucker' className='custom-link'>Trucker Login</NavLink>
                <NavLink to='/login/company' className='custom-link'>Company Login</NavLink>
            </ul>
        </nav>
    )
}
export default Navbar
import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar({currentCompany, setCurrentCompany}) {
    return (
        <nav>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/register/trucker' className='custom-link'>Trucker Signup</NavLink>
                <NavLink to='/register/company' className='custom-link'>Company Signup</NavLink>
                <NavLink to='/login/trucker' className='custom-link'>Trucker Login</NavLink>
                <NavLink to='/login/company' className='custom-link'>Company Login</NavLink>
                {currentCompany?.id ? <NavLink to='/'>My Connect</NavLink> : null}
            </ul>
        </nav>
    )
}
export default Navbar
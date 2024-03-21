// import React from 'react'
// import { NavLink } from 'react-router-dom'

// function Navbar({currentCompany, setCurrentCompany, currentTrucker, setCurrentTrucker}) {
//     return (
//         <nav>
//             <ul>
//                 <NavLink to='/'>Home</NavLink>
//                 <NavLink to='/register/trucker' className='custom-link'>Trucker Signup</NavLink>
//                 <NavLink to='/register/company' className='custom-link'>Company Signup</NavLink>
//                 <NavLink to='/login/trucker' className='custom-link'>Trucker Login</NavLink>
//                 {}
//                 <NavLink to='/login/company' className='custom-link'>Company Login</NavLink>
//                 {currentCompany?.id ? <NavLink to='/'>My Connect</NavLink> : null}
                
//             </ul>
//         </nav>
//     )
// }
// export default Navbar

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ currentCompany, setCurrentCompany, currentTrucker, setCurrentTrucker }) {
    return (
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          {!currentTrucker.id && !currentCompany.id ? (
            <>
              <li><NavLink to='/register/trucker' className='custom-link'>Trucker Signup</NavLink></li>
              <li><NavLink to='/register/company' className='custom-link'>Company Signup</NavLink></li>
              <li><NavLink to='/login/trucker' className='custom-link'>Trucker Login</NavLink></li>
              <li><NavLink to='/login/company' className='custom-link'>Company Login</NavLink></li>
            </>
          ) : null}
          {currentTrucker.id ? (
            <>
              <li><NavLink to='/company' className='custom-link'>Company Connect</NavLink></li>
              <li><NavLink to='/logout' className='custom-link'>Logout</NavLink></li>
              <li><NavLink to='/myconnect' className='custom-link'>My Connect</NavLink></li>
            </>
          ) : null}
          {currentCompany.id ? (
            <>
              <li><NavLink to='/trucker' className='custom-link'>Trucker</NavLink></li>
              <li><NavLink to='/logout' className='custom-link'>Logout</NavLink></li>
              <li><NavLink to='/myconnect' className='custom-link'>My Connect</NavLink></li>            
            </>
          ) : null}
        </ul>
      </nav>
    );
  }

export default Navbar;

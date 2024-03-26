import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar({ currentCompany, setCurrentCompany, currentTrucker, setCurrentTrucker }) {

    const navigate = useNavigate()

    function handleLogoutCompany() {
        setCurrentCompany({});
        fetch('/api/logout/company', { method: 'DELETE' });
        console.log("shoop")
        navigate('/');
        console.log("sheep")
    }

    function handleLogoutTrucker() {
        setCurrentTrucker({});
        fetch('/api/logout/trucker', { method: 'DELETE' });
        console.log("whoop")
        navigate('/');
        console.log("wheep")
    }
    return (
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          {!currentTrucker?.id && !currentCompany?.id ? (
            <>
              <li><NavLink to='/register/trucker' className='custom-link'>Trucker Signup</NavLink></li>
              <li><NavLink to='/register/company' className='custom-link'>Company Signup</NavLink></li>
              <li><NavLink to='/login/trucker' className='custom-link'>Trucker Login</NavLink></li>
              <li><NavLink to='/login/company' className='custom-link'>Company Login</NavLink></li>
              <li><NavLink to='/load'className='custom-link'>Available Loads</NavLink></li>
            </>
          ) : null}
          {currentTrucker.id ? (
            <>
              <li><NavLink to='/company' className='custom-link'>Company Connect</NavLink></li>
              {/* <li><a href='#' onClick={handleLogoutTrucker} className='custom-link'>Logout</a></li> */}
              <li><NavLink to="/" onClick={handleLogoutTrucker} className="custom-link">Logout</NavLink></li>
              <li><NavLink to='/load'className='custom-link'>Available Loads</NavLink></li>
              <li><NavLink to='/myconnect' className='custom-link'>My Connect</NavLink></li>
            </>
          ) : null}
          {currentCompany.id ? (
            <>
              <li><NavLink to='/trucker' className='custom-link'>Trucker</NavLink></li>
              {/* <li><a href='#' onClick={handleLogoutCompany} className='custom-link'>Logout</a></li> */}
              <li><NavLink to="/" onClick={handleLogoutCompany} className="custom-link">Logout</NavLink></li>
              <li><NavLink to='/load'className='custom-link'>Available Loads</NavLink></li>
              <li><NavLink to='/myconnect' className='custom-link'>My Connect</NavLink></li>            
            </>
          ) : null}
        </ul>
      </nav>
    );
  }

export default Navbar;

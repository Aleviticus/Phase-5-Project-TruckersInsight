import React, { useState } from 'react'
import './css/CompanyCard.css'

function CompanyCard({company_name, location, phone_number}) {
    const [isConnect, setIsConnect] = useState(true)

    function handleClick() {
        setIsConnect(!isConnect)
    }
    return (
        <li className='card'>
            <h4>Company Name: {company_name}</h4>
            <p>Location: {location}</p>
            <p>Contact: {phone_number}</p>
            {isConnect ? (
                <button onClick={handleClick} className='primary'>
                    Connect
                </button>
            ) : (
                <button onClick={handleClick}>Can't Connect</button>
            )}
        </li>
    )
}

export default CompanyCard
// useEffect (() => {
//     fetch('http://127.0.0.1:5555/api/company')
//     .then(res => {
//       if (res.ok) {
//         return res.json()
//       }
//       throw new Error('Network response was not ok')
//     })
//     .then(data => {
//       console.log(data)
//       setCompanies(data)
//     })
//     .catch(error => console.error)
//   }, [])

// card is the child of the container
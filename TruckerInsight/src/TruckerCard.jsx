import React, { useState } from 'react'

function TruckerCard({owner, vehicle, trailer, location, phone_number, years_of_experience}) {
    const [isConnect, setIsConnect] = useState(true)

    function handleClick() {
        setIsConnect(!isConnect)
    }
    return (
        <li className='card'>
            <h4>Trucker Name: {owner}</h4>
            <p>Vehicle: {vehicle}</p>
            <p>Trailer: {trailer}</p>
            <p>Location: {location}</p>
            <p>Contact: {phone_number}</p>
            <p>Years of Experience: {years_of_experience}</p>
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


export default TruckerCard
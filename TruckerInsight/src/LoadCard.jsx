import React, { useState } from 'react'

function LoadCard({pickup, dropoff, materials, weight, payout,}) {

    const[isAvailable, setIsAvailable] = useState(true)

    function handleClick() {
        setIsAvailable(!isAvailable)
    }
    return (
        <li className='load-card'>
            <p>Pickup: {pickup}</p>
            <p>Dropoff: {dropoff}</p>
            <p>Materials: {materials}</p>
            <p>Weigth: {weight}</p>
            <p>Payout: {payout}</p>
            {isAvailable ? (
                <button onClick={handleClick}  className='primary'>
                    Available
                </button>
            ) : (
                <button onClick={handleClick}>Not Available</button>
            )}
        </li>
    )
}

export default LoadCard
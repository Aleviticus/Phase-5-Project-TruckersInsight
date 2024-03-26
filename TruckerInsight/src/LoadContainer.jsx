import {useState, useEffect} from 'react'
import React from 'react'
import LoadCard from './LoadCard'

function LoadContainer() {
    const [loads, setLoads] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/load')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error('Network response was not ok')
            })
            .then(data => {
                setLoads(data)
            })
            .catch(error => console.log('Error fetching data', error))
        }, [])
        return (
            <ul className='load-container'>
                {loads.map((load) => (
                    <LoadCard
                        key={load.id}
                        pickup={load.pickup}
                        dropoff={load.dropoff}
                        materials={load.materials}
                        weight={load.weight}
                        payout={load.payout}
                    />
                ))
            }
            </ul>
        )
}

export default LoadContainer
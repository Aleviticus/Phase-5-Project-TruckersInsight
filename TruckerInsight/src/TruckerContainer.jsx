import {useState, useEffect} from 'react'
import React from 'react'
import TruckerCard from './TruckerCard';

function TruckerContainer() {
    const [truckers, setTruckers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/trucker')
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Network response was not ok');
          })
          .then(data => {
            setTruckers(data);
          })
          .catch(error => console.error("Error fetching data:", error));
      }, []);
    return (
        <ul className='card-container'>
            {truckers.map((trucker) =>(
                <TruckerCard
                    key={trucker.id}
                    owner={trucker.owner}
                    vehicle={trucker.vehicle}
                    trailer={trucker.trailer}
                    location={trucker.location}
                    phone_number={trucker.phone_number}
                    years_of_experience={trucker.years_of_experience}
                />
            ))
        }
        </ul>
    )
}

export default TruckerContainer
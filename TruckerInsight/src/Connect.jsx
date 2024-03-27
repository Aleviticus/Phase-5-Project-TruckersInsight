import React from 'react'
import { useState, useEffect} from 'react'
import CompanyCard from './CompanyCard'

function Connect({currentTrucker}) {
    console.log(currentTrucker)

    const [connect, setConnect] = useState([])

    useEffect(() => {
        fetch('/api/check_session/trucker')
        .then(res => {
            if(res.ok) {
                res.json()
                .then(data => setConnect(data.connect) )
            }
        })
    }, [])
    console.log(connect)

    return (
        <div className='connect-card'>
            {connect.map((con) => (
                <CompanyCard
                key={con.company.id}
                company_name={con.company.company_name}
                location={con.company.location}
                phone_number={con.company.phone_number}
                />
            ))}
        </div>
    )
}

export default Connect
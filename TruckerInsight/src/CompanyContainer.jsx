import React from 'react'
import CompanyCard from './CompanyCard'
import { useState, useEffect } from 'react'

function CompanyContainer() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5555/api/trucker')
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Network response was not ok');
          })
          .then(data => {
            setCompanies(data);
          })
          .catch(error => console.error("Error fetching data:", error));
      }, []);

    return (
        <ul className='card-container'>
            {companies.map((company) =>(
                <CompanyCard
                    key={company.id}
                    company_name={company.company_name}
                    location={company.location}
                    phone_number={company.phone_number}
                />
            ))
        }
        </ul>
    )
}

export default CompanyContainer
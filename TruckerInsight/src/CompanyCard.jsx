import React, { useState, useEffect } from 'react'
import './css/CompanyCard.css'
import { useNavigate } from 'react-router-dom';

function CompanyCard({company_name, location, phone_number, currentTrucker, currentCompany, company_id}) {

    const navigate=useNavigate()
    
    function handleClick(e) {
        console.log(currentTrucker)
        e.preventDefault();
        const connectInfo = { trucker_id:currentTrucker.id, company_id:company_id};
        
        fetch('/api/connect', {
            method:'POST',
            headers: {
                'Content-type': "Application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(connectInfo),
           })
           .then((res) => {
            if (res.ok) {
                navigate('/myconnect');
            } else {
                throw new Error('Failed to submit the form')
            }
           })
           .catch(error => {
            console.error('Error', error)
           })
        }
    
    return (
        <li className='card'>
            <h4>Company Name: {company_name}</h4>
            <p>Location: {location}</p>
            <p>Contact: {phone_number}</p>
                <button onClick={handleClick} className='primary'>
                    Connect
                </button>
        </li>
    )
}

export default CompanyCard

import { useNavigate } from "react-router-dom";
import React, { useState } from 'react'
import './css/CompanySignup.css'

function CompanySignup({companyData,setCompanyData}) {

    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        username: '',
        password:'',
        company_name:'',
        location:'',
        phone_number:''
    })

    function handleSubmit(e){
       e.preventDefault();
       setCompanyData([...companyData,formValues]);
       setFormValues({
        username:'',
        password:'',
        company_name:'',
        location:'',
        phone_number:''
       })

       fetch('/api/register/company', {
        method:'POST',
        headers: {
            'Content-type': "Application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(formValues),
       })
       .then((res) => {
        if (res.ok) {
            navigate('/login/company');
        } else {
            throw new Error('Failed to submit the form')
        }
       })
       .catch(error => {
        console.error('Error', error)
       })
    }
    return (
       <div className="company-signup">
        <h2>New Company</h2>
        <form onSubmit={handleSubmit}>
            <input 
                type = 'text'
                value={formValues.username}
                onChange={(e) => setFormValues({...formValues, username: e.target.value})}
                placeholder="Username"
            />
            <input 
                type="password"
                value={formValues.password}
                onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                placeholder="Password"
            />
            <input
                type="text"
                value={formValues.company_name} 
                onChange={(e) => setFormValues({...formValues, company_name: e.target.value})}
                placeholder="Company Name"
            />
            <input
                type="text"
                value={formValues.location}
                onChange={(e) => setFormValues({ ...formValues, location: e.target.value })}
                placeholder="Location"
            />
            <input
                type="text"
                value={formValues.phone_number}
                onChange={(e) => setFormValues({ ...formValues, phone_number: e.target.value })}
                placeholder="Phone Number"
            />
            <button type="submit">Register</button>
        </form>
       </div>
    )
}

export default CompanySignup
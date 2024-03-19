import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './css/TruckerSignup.css'


function TruckerSignup({ truckerData,setTruckerData }) {

    const navigate = useNavigate()
    const [formValues, setFormValues] = useState({
        username: '',
        password:'',
        owner:'',
        vehicle:'',
        trailer:'',
        location:'',
        phone_number:'',
        years_of_experience:''
    })

    function handleSubmit(e){
       e.preventDefault();
       setTruckerData([...truckerData,formValues]);
       setFormValues({
        username:'',
        password:'',
        owner:'',
        vehicle:'',
        trailer:'',
        location:'',
        phone_number:'',
        years_of_experience:''
       })

       fetch('/api/register/trucker', {
        method:'POST',
        headers: {
            'Content-type': "Application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(formValues),
       })
       .then((res) => {
        if (res.ok) {
            navigate('/api/login/trucker');
        } else {
            throw new Error('Failed to submit the form')
        }
       })
       .catch(error => {
        console.error('Error', error)
       })
    }


    return (
        <div className="trucker-signup">
            <h2>New Trucker</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={formValues.username}
                    onChange={(e) => setFormValues({...formValues, username: e.target.value })}
                    placeholder="Username"
            />
                <input 
                    type='password'
                    value={formValues.password}
                    onChange={(e) => setFormValues({...formValues, password: e.target.value})}
                    placeholder='Password'
            />
                <input 
                type="text"
                value={formValues.vehicle}
                onChange={(e) => setFormValues({ ...formValues, vehicle: e.target.value })}
                placeholder="Vehicle"
            />
                <input 
                type="text"
                value={formValues.trailer}
                onChange={(e) => setFormValues({ ...formValues, trailer: e.target.value })}
                placeholder="True or False"
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
                <input 
                type="number"
                value={formValues.years_of_experience}
                onChange={(e) => setFormValues({ ...formValues, years_of_experience: e.target.value })}
                placeholder="Years of Experience"
            />
            <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default TruckerSignup
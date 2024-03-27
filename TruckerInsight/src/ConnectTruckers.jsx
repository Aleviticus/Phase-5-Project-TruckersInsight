// import React from 'react'
// import { useState, useEffect } from 'react'
// import TruckerCard from './TruckerCard'

// function ConnectTrucker({}) {

//     const [available, setAvailable] = useState([])

//     useEffect(() => {
//         fetch('/api/check_session/company')
//         .then(res => {
//             if(res.ok) {
//                 res.json()
//                 .then(data => setAvailable(data.available) )
//             }
//         })
//     }, [])

//     return (
//         <div className=''connect-trucker-card>
//             {available.map((trk) => (
//                 <TruckerCard
//                 key={trk.trucker.id}
//                 owner={trk.trucker_owner}
//                 vehicle={trk.trucker.vehicle}
//                 trailer={trk.trucker.trailer}
//                 location={trk.trucker.location}
//                 phone_number={trk.trucker.phone_number}
//                 years_of_experience={trk.trucker.years_of_experience}
//                 />
//             ))}
//         </div>
//     )
// }

// export default ConnectTrucker
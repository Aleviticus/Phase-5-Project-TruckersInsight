import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Title from "./Title";
import { Route, Routes} from 'react-router-dom'
import  LoginCompany from "./LoginCompany";
import  LoginTrucker from './LoginTrucker'
import TruckerSignup from "./TruckerSignup";
import CompanySignup from "./CompanySignup";



function App(){
  const [currentUser, setCurrentUser] = useState({})
  const [truckerData, setTruckerData] = useState([])
  const [companyData, setCompanyData] = useState([])

  const baseURL = '/api'

  useEffect(() => {
    fetch('/api/check_session')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => setCurrentUser(data))
      }
    })

  })
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/api/'element={<Title/>}/>
        <Route path='/api/register/trucker'element={<TruckerSignup truckerData={truckerData} setTruckerData={setTruckerData}/>}/>
        <Route path="/api/register/company"element={<CompanySignup companyData={companyData} setCompanyData={setCompanyData}/>}/>
        <Route path='/api/login/trucker'element={<LoginTrucker currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/api/login/company'element={<LoginCompany currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  )
}

export default App
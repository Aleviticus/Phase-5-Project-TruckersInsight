import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Title from "./Title";
import { Route, Routes} from 'react-router-dom'
import  LoginCompany from "./LoginCompany";
import  LoginTrucker from './LoginTrucker'
import TruckerSignup from "./TruckerSignup";
import CompanySignup from "./CompanySignup";
import CompanyContainer from "./CompanyContainer";
import TruckerContainer from "./TruckerContainer";



function App(){
  const [currentTrucker, setCurrentTrucker] = useState({})
  const [currentCompany, setCurrentCompany] = useState({})
  // current trucker
  // current company
  // send these states down 
  const [truckerData, setTruckerData] = useState([])
  const [companyData, setCompanyData] = useState([])
  const [companies, setCompanies] = useState([])

  const baseURL = '/api'

  useEffect(() => {
    fetch('/api/check_session/company')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => setCurrentCompany(data))
      }
    })

  }, [])

  useEffect(() => {
    fetch('/api/check_session/trucker')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => setCurrentTrucker(data))
      }
    })

  }, [])
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/'element={<Title/>}/>
        <Route path='/register/trucker'element={<TruckerSignup truckerData={truckerData} setTruckerData={setTruckerData}/>}/>
        <Route path="/register/company"element={<CompanySignup companyData={companyData} setCompanyData={setCompanyData}/>}/>
        <Route path='/login/trucker'element={<LoginTrucker currentTrucker={currentTrucker} setCurrentTrucker={setCurrentTrucker}/>}/>
        <Route path='/login/company'element={<LoginCompany currentCompany={currentCompany} setCurrentCompany={setCurrentCompany}/>}/>
        <Route path='/company'element={<CompanyContainer currentTrucker={currentTrucker} setCurrentTrucker={setCurrentTrucker}/>}/>
        <Route path='/trucker'element={<TruckerContainer currentCompany={currentCompany} setCurrentCompany={setCurrentCompany}/>}/>
      </Routes>
    </div>
  )
}

export default App
import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import Title from "./Title";
import { Route, Routes} from 'react-router-dom'
import  LoginCompany from "./LoginCompany";
import  LoginTrucker from './LoginTrucker'



function App(){
  const [currentUser, setCurrentUser] = useState({})

  const baseURL = '/'

  useEffect(() => {
    fetch('/check_session')
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
        <Route path='/'element={<Title/>}/>
        <Route path='/login/trucker'element={<LoginTrucker currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
        <Route path='/login/company'element={<LoginCompany currentUser={currentUser} setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  )
}

export default App
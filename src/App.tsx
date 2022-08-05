import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import {ContactList, RegisterPage, LoginPage, ContactPage} from "./pages";


const App:React.FC = () => {
  return(
  <Routes>
    <Route path={'/'} element={<ContactList/>}/>
    <Route path={'/contact/:contactId'} element={<ContactPage/>}/>
    <Route path={'/register'} element={<RegisterPage/>}/>
    <Route path={'/login'} element={<LoginPage/>}/>
  </Routes>
  )
}

export default App

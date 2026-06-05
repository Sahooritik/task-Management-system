import React, {useEffect}from "react"

import Login from "./components/auth/Login"
import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import { setLocalStorage } from "./utils/localstorage"

const App = ()=> {

  
  useEffect(() => {
    setLocalStorage();
  }, []);
   


  
  return (
   <>

  
    <Login />
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard/> */}
   </>
   
  )
}

export default App
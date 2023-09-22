
import { Routes , Route } from 'react-router-dom'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'

function Routing() {
  return (
    <>
     <Routes>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/login" element = {<Login/>}  />
     </Routes>
    </>
  )
}

export default Routing

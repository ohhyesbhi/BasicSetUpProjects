import { useState } from "react";
import {useDispatch} from "react-redux";
 
import {login} from "../../redux/slices/Authslice" 

function Login() {

  const dispatch = useDispatch();
  const [ loginDetails , setLoginDetails ] = useState({
    email : "",
    password : ""
  })

  async function handleOnSubmit(){
    if(!loginDetails.email || !loginDetails.password) return;
    const response = await dispatch(login(loginDetails));
    console.log(response,"response")
  }

  function handleInputChange(e){
         const {name,value} = e.target;
         setLoginDetails({
          ...loginDetails ,
          [name] : value
         })
  }


  return (
 <>
<div className='h-[90vh] w-full flex justify-center items-center'>
  <div className="card flex w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title flex justify-center mb-4 text-4xl">Login</h2>
      <input autoComplete='one-time-code' name="email" onChange={handleInputChange} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
      <input autoComplete='one-time-code' name="password" onChange={handleInputChange} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
      <button autoComplete='one-time-code' className="btn btn-warning mt-4" onClick={()=> handleOnSubmit()}>Login</button>

    </div>
  </div>
</div>
 </>
  )
}

export default Login

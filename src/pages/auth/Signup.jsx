import { useState } from "react"


function Signup() {

  const [usertype,setUsertype] = useState()

  function handleOnClick(e){
      setUsertype(e.target.textContent)
      document.getElementById("dropdownTable").style.display = "none";
  }
  
  function handleDropDown(){
    document.getElementById("dropdownTable").style.display = "flex";
  }

  return (
   <>
<div className='h-[90vh] w-full flex justify-center items-center'>
  <div className="card flex w-96 bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title flex justify-center mb-4 text-4xl">Signup</h2>
      <input autoComplete='one-time-code' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" />
      <input autoComplete='one-time-code' type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
      <input autoComplete='one-time-code' type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
      <div   className="dropdown dropdown-bottom">

          <label id="dropdown" onClick={()=>handleDropDown()}  tabIndex={0} className="btn m-1">{usertype?usertype:"Usertype"}</label>
          <ul  id="dropdownTable"  onClick={(e)=> handleOnClick(e)} tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Engineer</a></li>
            <li><a>Customer</a></li>
            <li><a>Admin</a></li>
          </ul>
          
      </div>
      <input autoComplete='one-time-code' type="text" placeholder="Client name" className="input input-bordered w-full max-w-xs" />
 
      <button autoComplete='one-time-code' className="btn btn-warning">Login</button>

    </div>
  </div>
</div>
   </>
  )
}

export default Signup

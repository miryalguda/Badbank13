import React, {useState} from 'react'
import  axios from "axios"
import { useNavigate }  from "react-router-dom"

const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post ("/createUser", {name, email, password})
  .then(result => {
    console.log (result)
    navigate('/Users')
  })
  .catch(err => console.log (err))
}

  return (
<>
<button
        className="btn btn-lg btn-block  bg-success text-center text-white p-3 mt-5"
        onClick={() => navigate("/Accounts4")}
      >
        Accounts page
      </button>


    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white  rounded p-3">
        <form onSubmit = {handleSubmit}>

          <h2> Create User</h2>
            <div className = "mb-2">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Enter Name..." className ='form-control'
              onChange= {(e) => setName(e.target.value)}></input>
            </div>
            
            <div className = "mb-2">
              <label htmlFor="">Email</label>
              <input type="text" placeholder="Enter Email..." className ='form-control'
              onChange= {(e) => setEmail(e.target.value)}></input>
            </div>

            <div className = "mb-2">
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Enter Age..." className ='form-control'
              onChange= {(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="btn btn-success">Submit</button>
        </form>


   
      </div>
    </div>
    </>
  )
}

export default CreateUser
 











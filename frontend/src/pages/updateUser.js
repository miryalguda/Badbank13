import React, { useState, useEffect} from 'react'
import { useParams, useNavigate} from "react-router-dom"
import axios from "axios"


const UpdateUser = () => {
  const { id } = useParams()

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect( () => {
    axios.get("/getUser/"+id)
    .then(result => {
      console.log(result)
      setName (result.data.name)
      setEmail (result.data.email)
      setPassword(result.data.password)
    })
    .catch(err => console.log(err))

  }, [])

const Update = (e) => {
  e.preventDefault();
  axios.put ("/updateUser/"+id, {name, email, password})
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
      <form onSubmit = {Update}>

        <h2> Update User</h2>
          <div className = "mb-2">
            <label htmlFor="">Name</label>
            <input type="text"  placeholder="Enter Name..."  className ='form-control'  value={name} onChange= {(e) => setName(e.target.value)}></input>
          </div>
          
          <div className = "mb-2">
            <label htmlFor="">Email</label>
            <input type="text"  placeholder="Enter Email..."  className ='form-control' value={email} onChange= {(e) => setEmail(e.target.value)}></input>
          </div>

          <div className = "mb-2">
            <label htmlFor="">Password</label>
            <input type="text"   placeholder="Enter Age..."  className ='form-control' value={password}  onChange= {(e) => setPassword(e.target.value)}></input>
          </div>
          <button className="btn btn-success">Update</button>
      </form>


 
    </div>
  </div>
  </>
  )
}

export default UpdateUser
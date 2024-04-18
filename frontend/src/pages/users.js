import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import  axios from "axios"



const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    {
      Name: "satish",
      Email: "Satish@abcd.com",
      Password: "secret123",
    },
  ]);

  useEffect( () => {
    axios.get ("/users")
    .then(result => setUsers (result.data))
    .catch(err => console.log(err))

  }, []);

  const handleDelete = (id) =>{
    axios.delete ('/deleteUser/'+id)
    .then (res => {
      console.log (res)
      window.location.reload()
      })
    .catch( err => console.log(err))
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
        <Link to ="/CreateUser" className=" btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                  <Link to ={`/UpdateUser/${user._id}`} className=" btn btn-success">Update</Link>
                    
                    <button className="btn btn-danger" onClick={(e) => handleDelete (user._id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Users;

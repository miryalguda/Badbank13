import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

import "./index.css";
import bank from "./images/bank.png";

const LoginButton = () => {

  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
sessionStorage.removeItem( "email", email)
  return (
    <>
      <div
        className="card card-body shadow md-5 mx-auto
            p-5  bg-primary text-white text-center "
        style={{
          maxWidth: "720px",
          margin: "auto",
          marginTop: "200px",
          border: "2px solid grey",
          boxShadow: "10px 10px 10px 5px  #b30000",
        }}
        data-bs-toggle="collapse"
        data-bs-target="#collapseWidthExample"
      >
        <h1 style={{ maxWidth: "720px", margin: "auto", fontSize: "5vw" }}>
          BADBANK
        </h1>
        <p>Welcome to Your Favorite Bank!</p>
        <div>
          <p></p>
          <div className="mx-auto">
            <img src={bank} alt="Card image cap" />
          </div>
        </div>
        <p></p>
        <p>
          <button
            className="btn btn-lg btn-block mx-auto bg-danger text-center text-white p-3"
            onClick={() => navigate("/register")}
          >
            Login
          </button>
        </p>
      </div>

   
    </>
  );
};

export default LoginButton;

import "./index.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "./LoginButton7.js";
import Accounts from "./Accounts4.js";
import TransactionsData from "./pages/TransactionsData1.js";
import WithdrawData from "./pages/Withdrawdata.js";

import Deposit from "./pages/Deposit.js";
import Withdraw from "./pages/Withdraw.js";
/*
import CreateAccount from "./pages/CreateAccount.js";
*/
import Usersdata from "./pages/Usersdata.js";
import Users from "./pages/users.js";
import CreateUser from "./pages/createUser.js"
import UpdateUser from "./pages/updateUser.js"

import NoMatch from "./pages/NoMatch.js";
import Signup from "./signup1.js";
import Loginpage from "./pages/Loginpage2.js";
import Code from "./pages/Code.js";

import Transfers from "./pages/Transfers.js";
import "bootstrap/dist/css/bootstrap.min.css";
export const UserContext = React.createContext(null);

function LoginApp() {
  let email = sessionStorage.getItem("email");
  return (
    <>
     
      {<h3 style= {{ textAlign: "right" }}>Hello, {email}. Welcome!!</h3>}

      <BrowserRouter>
        <UserContext.Provider
          value={{
            User: ["satish"],
            users: [
              {
                name: "Satish",
                email: "abcdef@gmail.com",
                password: "secret",
                balance: 200,
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" element={<LoginButton />} />
            {/*
            <Route path="/CreateAccount" element={<CreateAccount />} />
        */}

            <Route path="*" element={<NoMatch />} />

            <Route exact path="/Usersdata" element={<Usersdata />} />

            <Route exact path="/Users" element={<Users />} />

            <Route  path= "/CreateUser" element= {<CreateUser />}></Route>
            <Route  path= "/UpdateUser/:id" element= {<UpdateUser />}></Route>



            <Route exact path="/Accounts4" element={<Accounts />} />

            <Route exact path="/Loginpage2" element={<Loginpage />} />

            <Route exact path="/Transfers" element={<Transfers />} />

            <Route exact path="/Code" element={<Code />} />
            <Route exact path="/register" element={<Signup />} />

            <Route
              exact
              path="/TransactionsData"
              element={<TransactionsData />}
            />

            <Route exact path="/Deposit" element={<Deposit />} />

            <Route exact path="/Withdraw" element={<Withdraw />} />
            <Route exact path="/WithdrawData" element={<WithdrawData />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default LoginApp;

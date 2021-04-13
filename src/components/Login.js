import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../Login.css"
import fire from "../firebase"

/**
* @author
* @function Login
**/

const Login = (props) => {
    const history=useHistory()
    const[email,setEmail]=useState("")
    const[password,setPass]=useState("")
    const login=event=>{
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/")

        })
        .catch(e=>alert(e.message))

    }
    const register=(e)=>{
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/")
        })
        .catch(e=>alert(e.message))
    }
  return(
    <div  className="login" >
        <Link to="/" >
            <img
            className="login__logo"
            src="https://avatars.githubusercontent.com/u/8594673?s=400&v=4"
            />
        </Link>
        <div className="login__container" >
          <h1>Sign in</h1>
          <form>
              <h5>E-mail</h5>
              <input value={email} onChange={e=>setEmail(e.target.value)}  type="text" />
              <h5>Password</h5>
              <input value={password} onChange={e=>setPass(e.target.value)}  type="password" />
              <button onClick={login} type="submit" className="login__sigIn" >Sign-in</button>



          </form>
          <p>By continuing, you agree to Amazon's
               Conditions of Use and Privacy Notice.</p>
          <button onClick={register} >Create your amazon account</button>
        </div>

    </div>
   )

 }

export default Login
import axios from "axios"
import React ,{ useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context"
import "./login.css"

export default function Login() {
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
  

  const {user,dispatch,isFetching}=useContext(Context)
  const handleSubmit= async(e)=>{
      e.preventDefault()
      dispatch({type:"LOGIN_START"})
      try{
     const res= await axios.post("http://localhost:5000/api/auth/login",{
      username,
      password
    });
    dispatch({type:"LOGIN_SUCCESS",payload:res.data.user})
      }catch(err){
        dispatch({type:"LOGIN_FAILURE"})
      }
  }

  return (
    <div className="Login">
      <span className="loginTitle">Login</span>
        <form className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your username..... " 
         value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        <label>Pasword</label>
        <input type="Password" className="loginInput" placeholder="Enter your Pasword..... " 
        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button className="LoginButton" type="submit" disabled={isFetching}>Login</button>
        </form>
        <button className="RegisterLoginButton">
         <Link className="link"  to="/Register">Register</Link>   
        
        
        </button>
        
        </div>
  )
}

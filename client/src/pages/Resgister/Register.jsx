import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./register.css"

export default function Register() {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const handleSubmit = async(e)=>{
    setError(false);
    e.preventDefault();
    try  {
      
    
    const res= await axios.post("http://localhost:5000/api/auth/register",{
      username,
      email,
      password,
    });
   
    res.data && window.location.replace("/login");
    } catch (error) {
      console.log("Error",error)
      setError(true);
    }
    
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
        <form className="registerform "onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="registerInput" placeholder="Enter your Username..... " 
        onChange={e=>setUsername (e.target.value)}
        />
        <label>Email</label>
        <input type="text" className="registerInput" placeholder="Enter your email..... " 
        onChange={e=>setEmail (e.target.value)}
        />
        <label>Pasword</label>
        <input type="Password" className="registerInput" placeholder="Enter your Pasword..... " 
        onChange={e=>setPassword (e.target.value)}
        />
         {/* <label>Confrim-Pasword</label>
        <input type="Pasword" className="registerInput" placeholder=" Re-Enter your Pasword..... " /> */}
        <button className="registerButton" type="submit">Register</button>
        </form>
        <button className="registerButtonLogin">
        <Link className="link" to="/Login">
          Login
        </Link>
        </button>
        { error&&<span style={{color:"red",marginTop:"10px" }}>something went wrong</span>}
        </div>
  )
}

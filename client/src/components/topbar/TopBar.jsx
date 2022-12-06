import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./topbar.css";
import { Context } from "../../context/Context";
export default function TopBar() {
  const {user,dispatch}=useContext(Context)
  const PF="http://localhost:5000/images/"
  const handleLogout=()=>{
  dispatch({type:"LOGOUT"})
  window.location.replace("/")
  }
 
  return (
    <div className='top'>
        
        <div className="topLeft"></div>

        <div className="topCenter">
            <ul className="topList">
                <li className="Toplistitems">
                  <Link className="link" to="/">Home</Link>
                </li>
                <li className="Toplistitems"><Link className="link" to="/About"> ABOUT</Link>
                  </li>
                <li className="Toplistitems"><Link className="link" to="/Contact">CONTACT</Link>
                  </li>
                <li className="Toplistitems"> <Link className="link" to="/Write">WRITE</Link> </li>
                <li className="Toplistitems" onClick={handleLogout}>
                  {user &&"LOGOUT"}
                </li>
            </ul>

        </div>
        
        <div className="topRight">
          {
            user ? ( 
           
           <p>{user.username}</p>

          
            ) :(<ul className="Toplist">
              <li className="Toplistitems">

              
              <Link className="link" to="/Login">Login
              </Link>
              </li>
              <li className="Toplistitems">

              
              <Link className="link" to="/Register">Register
              </Link>
              </li>
              
              </ul> )
          }
       
        
        
      

        </div>
    </div>
  )
}

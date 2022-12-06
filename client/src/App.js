import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/Login/Login";
import Register from "./pages/Resgister/Register";
import React, { useContext } from "react";
import { BrowserRouter as Router,Routes,Route,Link}from "react-router-dom";
import { Context } from "./context/Context";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

  
  
  
 
 



function App() {
  const {user}=useContext(Context)
  return (
  
   <Router >
     <TopBar/>
    
    <Routes>

    
    <Route   path="/" element={<Home />}/>
    

<Route  path="/Register"element={user?<Home/> :<Register />}/>
<Route  path="/About"element={<About />}/>
<Route  path="/Contact"element={<Contact />}/>

<Route  path="/Login" element={user?<Home/> :<Login/>}/>
<Route  path="/Write" element={user?<Write/> :<Register/>}/>
<Route  path="/Setting" element={user?<Setting/> :<Register/>}/>
<Route  path="/post/:postId" element={<Single/>}/>



   </Routes>
 
    </Router>

  );
}

export default App;

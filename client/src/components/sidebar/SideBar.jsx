import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Sidebar.css"

export default function SideBar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats=async ()=>
    {
      const res=await axios.get("/categories")
      console.group("catagories",res.data)
      setCats(res.data)
    }
    getCats();

  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="img1" src="https://cdn.hometipsforwomen.com/wp-content/uploads/2010/08/08230425/woman-writer-thinking-ht4w1280-720x405.jpg" alt="" />
     <p className="ptag">Nobody likes a know-it-all.
         The more personality you can show in a blog post, the better.
          You’re not writing for your college English professor.
           You’re writing for the amusement of the reader.
            That’s a big difference.


     </p>
     
      </div>
      <div className="sidebaritems"></div>
      <span className="sidebarTitle"> CATAEGRIES</span>

      <ul className="sidebarlist">
      
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
          <li className="sidebarListitems">{c.name}</li>
          </Link>
        ))}
      
      
      </ul>
      
    </div>
  )
}

import { useEffect,useState,useContext } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import { Context } from "../../context/Context"; 
import axios from "axios"
import { useLocation } from "react-router-dom";
export default function Home() {
  const [posts,setPosts]=useState([]);
  const[ALlPost,setAllpost]=useState([])
  const[filterPost,setFilterpost]=useState([])
  const {user}=useContext(Context)
  const [butonText,setButtonText]=useState("My Post")
  const {search}=useLocation();  
  const location=useLocation()
  
  
  useEffect(()=>{
    const fetchPosts = async()=>{
      const res=await axios.get("/posts"+ search);
      setPosts(res.data);
      setAllpost(res.data)
      
    }
    fetchPosts();

  },[search]);
  const handleClick=()=>{
    
   if(butonText=="All Post"){
      setPosts(ALlPost)
        setButtonText("My Post")
  }
 else if(butonText=="My Post"){
    if(user){
     const list= posts.filter((item)=>{
        return item.username==user.username
        
      })
      setButtonText("All Post")
     setPosts(list)
  }
}
}
  return (
   <>
      <Header/>
      {user&&<button style={{width:200,height:60,fontSize:30,backgroundColor:"coral",color:'white',marginLeft:350,border:'none'}} 
      onClick={handleClick}>{butonText}</button>}
      <div className="home">
       
        <Posts posts={posts}/>
        
      <SideBar/>
    </div>
    </>
  )
}

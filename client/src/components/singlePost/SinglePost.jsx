import axios from "axios";
import { useEffect, useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlepost.css"
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location= useLocation()
  const path= location.pathname.split("/")[2];
  const [post, setPost]=useState({})
  const PF="http://localhost:5000/images/"
  const {user}=useContext(Context)
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const[updatestate,setUpdatestate]=useState(false)

  useEffect(() => {
  const getPost=async ()=>{
    const res =  await axios.get("/posts/"+ path);

    setPost(res.data)
    setTitle(res.data.title)
    setDesc(res.data.desc)
  
  };
  getPost();
  }, [path]);
 const handleDelete=async()=>{
  try{
    await axios.delete(`http://localhost:5000/api/posts/${post._id}`,
    {data:{username:user.username},
  })  
    window.location.replace("/")
  }catch(err){console.log(err)}
  
 }
 const handleUpdate=async()=>{
  setUpdatestate(true)
 }
 const Update=async()=>{
  try{
    await axios.put(`http://localhost:5000/api/posts/${post._id}`,
    {username:user.username,title,desc,
  })  
    window.location.reload()
    setUpdatestate(false)
  }catch(err){console.log(err)}
 }
  return (
    <div className="singlePost">
      
      {post.Photo &&(
            <img className="singlepostimge" src={PF+post.Photo}
             alt="" srcset="" />
            )}
        <div className="singlepostwrapper">

            {updatestate?<input 
                 type="text"
                 placeholder="Title" 
                 className="writeInput" value={title} 
                 onChange={(e)=>setTitle(e.target.value)}
                 style={{border:"none"}} />:
            (

            
            <h1 className="singlepostTitle">
              {post.title}
              {post.username===user?.username&&  (
            <div className="singlePostEditor">
            <i className="singlePosticon  fa-regular fa-pen-to-square" onClick={handleUpdate}></i>
            <i className="singlePosticon    fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
            )}
            </h1>
            )}
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: 
                    <Link to={`/?user=${post.username}`} className='link'>
                    <b>{post.username}</b>
                    </Link>
                    
                </span>  

                <span className="singlePostDate"> {new Date(post.createdAt).toDateString()}
                </span>
                
            </div>
            {updatestate?
            <>
             <button className="singlePostButton" onClick={Update}>Update</button>
            <textarea placeholder="Tell your Story........."type="text"className="writeInput writeText" 
                 value={desc} 
                 onChange={(e)=>setDesc(e.target.value)}
                >
                </textarea>
                
                 </>
                 :
            (
            <p className="singlepostdescrib"> {post.desc}</p>

            )}
               
        </div>

    </div>
  )
}

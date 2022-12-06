import "./Setting.css"
import SideBar from "../../components/sidebar/SideBar"
import { useContext ,useState} from "react"
import { Context } from "../../context/Context"
import axios from "axios"

export default function Setting() {
    const {user,dispatch}=useContext(Context)
    const [username,setUsername]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const [file,setFile]=useState(null)
    const [myuser,setMyUser]=useState(user)
    const PF="http://localhost:5000/images/"
    let filename=""
    const handleSubmit=async(e)=>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const UpdatedUser={
          userId:user._id,
          username,
          email,
          pass
        }
        if(file){
          const data=new FormData()
           filename=Date.now()+file.name;
          data.append("name",filename)
          data.append("file",file)
          console.log("qwe",filename)
          UpdatedUser.profilePic=filename
          try{
        await axios.post("http://localhost:5000/api/upload",data)
        
          }catch(err){
            console.log(err);
          }
          try{
            const res= await axios.put(`http://localhost:5000/api/users/${user._id}`,UpdatedUser)
           
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
            localStorage.setItem("user",JSON.stringify(res.data))
            //alert("PRofile Updated Successfully")
           }
           catch(err)
           {console.log(err)
            dispatch({type:"UPDATE_FAILURE"})
     
           }
         
        }
       
    }
  return (
    <div className="settings">
        <div className="SettingWrapper">
            <div className="settingTitle">
                <span className="settingUpDateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit} >
                <label>Profile Picture</label>
                <div className="settingPP">
                 
                    <img src={file?URL.createObjectURL(file):PF+user.profilePic} alt="" />


                    <label htmlFor="fileInput">
                    <i className="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file"  id="fileInput" style={{display:"none"}}
                    onChange={(e)=>setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                <input type="text"  placeholder={user.username} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email"  placeholder={user.email}  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="Password"  value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button className="settingSubmit" type="submit">Update</button>
                

            </form>
            



            
        </div>
        <SideBar/>
    </div>
    
  )
}

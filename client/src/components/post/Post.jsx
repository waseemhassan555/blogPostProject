import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
    const PF="http://localhost:5000/images/"


  return (
    <div className="post">
      
      { post.Photo &&<img className="postImg" src={PF+post.Photo} alt="" />}
      <div className="postInfo">
      <div className="postCats">{
        post.catagories.map((c,key)=>(
          <span className="postCats">{c.name}</span>
        ))

      }

      </div>
      <Link to={`/post/${post._id}`} className="link"> 
 <span className="postTitle">{post.title} </span>

</Link>
<hr/>
<span className="postDate">{new Date(post.createdAt).toDateString()}
</span>
      </div>
      <p className="postDesc"> {post.desc}</p>
  {/* {post.Photo &&  <img className="postImg" src= {post.Photo} alt="" />}
   <div className="postInfo">
 <div className="postCats">{
post.categories.map((c)=>(
<span className="postCats">{c.name}</span>
))}
</div>
<Link to={`/post/${post._id}`} className="link"> 
 <span className="postTitle">{post.title} </span>

</Link>
                    
  <hr/>
 <span className="postDate">{new Date(post.createdAt).toDateString()}
</span>
</div>
 <p className="postDesc"> {post.desc}</p> */}
            
 </div>

        
        
            
        
        
  );
}

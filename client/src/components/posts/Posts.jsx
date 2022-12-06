import "./posts.css"
import Post from "../post/Post"

export default function Posts({posts}) {
  return (
    <div className='Posts'>
      
     
      {posts.map((p,key)=>(
       
       <>
       
       

<Post post={p}/>
      
</>
) )}
      
      
         
        
    </div>
  );
}

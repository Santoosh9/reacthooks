import React,{useState,useEffect, Fragment}from 'react'
import axios from 'axios'

 const Datafetch=()=> {
    const [post,setPost]=useState([])
    const [limit,setLimit]=useState(20)
 
useEffect(()=>{
     axios.get(`https://jsonplaceholder.typicode.com/posts`)
     .then(res=>{
         console.log(res.data)
         setPost(res.data)
     })
     .catch(error=>console.log(error))
     },[])
    return (
        <>
           {post.slice(0,limit).map(p=>{
               return(
                   <Fragment key={p.id}>
                       <li>{p.title}</li>
                       <p>{p.body}</p>
                   </Fragment>
                   
               )
           }

           )}
            
         {limit<post.length &&
         <button onClick={()=>setLimit(limit+20)} style={{backgroundColor:"orange"}}>Lode More</button> 
         } 
        </>
    )
}
export default  Datafetch
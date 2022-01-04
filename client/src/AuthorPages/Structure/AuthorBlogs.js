import React, { useState } from 'react'
import Edit from '@mui/icons-material/Edit';
import "../Style/AuthorBlogs.scss"
   import { useEffect } from "react";
   import Card from '@mui/material/Card';
   import CardHeader from '@mui/material/CardHeader';
   import axios from "axios"
   import {
       Grid
     } from '@material-ui/core/'
      import { CardActionArea } from '@mui/material';

const AuthorBlogs = (({history})=>{




    const [posts, setPosts] = useState([]);
 
    const PF = "http://localhost:5000/images/";
   
    
    useEffect(() => {
      const fetchPosts = async () => {
       const res = await axios.get("/api/posts");
       console.log(res)
       setPosts(res.data)
     
      };
      fetchPosts();
    
    }, []);
    

     
    
        
        
    return(



<div className="editGrid">
 

  {posts.map((blogPosts) => (
  <Card 
    className="card"

    sx={{ maxWidth: 345 }}>

    <CardHeader
    key={blogPosts.title}
    className="cardHeader"
    title={blogPosts.title}
    subheader={new Date(blogPosts.createdAt).toDateString()}
  />
      <div  >
        
  <img className="image" src={PF + blogPosts.photo} alt="" />
      

    <CardActionArea>
 <button   className="edit" onClick={() => {
   
    window.location.replace("/editpost/" + blogPosts._id);

}}
><Edit></Edit></button>

    </CardActionArea>
      </div>

  </Card>


))}

  
  </div>

    )
})

export default AuthorBlogs
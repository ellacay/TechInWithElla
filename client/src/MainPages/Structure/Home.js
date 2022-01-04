import React, { useState } from 'react'
import '../Style/Home.scss'

   import Card from '@mui/material/Card';
   import CardHeader from '@mui/material/CardHeader';
   import { CardActionArea } from '@mui/material';

import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../../MainPages/Style/FilterBlogs.scss"
   import { useEffect } from "react";

   import axios from "axios"
   import {
       Grid
} from '@material-ui/core/'
     
const Home = (({ history }) => {
    let { category } =
    useParams();
  
 
    const PF = "http://localhost:5000/images/";
    const [posts, setPosts] = useState([]);



    useEffect(() => {

                  
        const fetchPosts = async () => {
            const res = await axios.get(`/posts/`);
   console.log(res.data)
         setFilter(res.data)
   
    
        };


 

      
           fetchPosts();
      
        },
[category]);

  

      const [filter, setFilter] = useState([]);

      
  return (
       <div className="FilterBlogs" key="Blogs">




<div className="AboutHome" key="About"  >
<p>If you teach one girl how to code, she will teach three" - Reshma Saujani, Founder of Girls Who Code</p>
<p>Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose.</p>
</div>
 

<div className="Blogs" key="Blogs">

<div className='grid'>

  {filter.map((blogPosts) => (

    <Card 
    key={blogPosts._id}
    className="card"
    onClick={() => {
   
      window.location.replace("/post/" + blogPosts._id);
  
  }}
>
    <CardActionArea>
        <p    className="text" id="postTitle" >{blogPosts.title}</p>
    <p className="text" id="postSubtitle" >{new Date(blogPosts.createdAt).toDateString()}</p>
  <img className="image" src={PF + blogPosts.photo} alt="" />

    </CardActionArea>
  </Card>


))}

</div>
  
  </div>
</div>
    
    )
})

export default Home



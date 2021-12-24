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
    const [posts, setPosts] = useState([]);
        const PF = "http://localhost:5000/images/";
    useEffect(() => {

                  
        const fetchPosts = async () => {
            const res = await axios.get(`/posts/`);

            setPosts(res.data)
   
    
        }
        fetchPosts()
    })
    return(
<div key="Home" >


<div className="AboutHome" key="About"  >
<p>If you teach one girl how to code, she will teach three" - Reshma Saujani, Founder of Girls Who Code</p>
<p>Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose.</p>
</div>

<div className="blogs" key="Blogs">

<div >
      <Grid
      container
      spacing={3}
      direction="row"

     
  >

  {posts.map((blogPosts) => (
    <Grid item    >
    <Card 
    className="card"
    onClick={() => {
   
      window.location.replace("/post/" + blogPosts._id);
  
  }}
>
    <CardActionArea>
    <CardHeader
    key={blogPosts.title}
    className="cardHeader"
    title={blogPosts.title}
    subheader={new Date(blogPosts.createdAt).toDateString()}
  />
  <img className="image" src={PF + blogPosts.photo} alt="" />

    </CardActionArea>
  </Card>
  </Grid>

))}

  </Grid>
  
  </div>
</div>


</div>
    )
})

export default Home
import React, { useState } from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../MainPages/FilterBlogs.scss"
   import { useEffect } from "react";
 
   import Card from '@mui/material/Card';
   import CardHeader from '@mui/material/CardHeader';
   import { CardActionArea } from '@mui/material';

   import axios from "axios"
   import {
       Grid
     } from '@material-ui/core/'
   
const FilterBlogs = (({history})=>{
    let { category } =
    useParams();
  
 
    const PF = "http://localhost:5000/images/";
    const [posts, setPosts] = useState([]);



    useEffect(() => {

                  
        const fetchPosts = async () => {
            const res = await axios.get(`/posts/`);
            if(category==="All"){
                setFilter(res.data)

            }else{
                const filtered = await axios.get(`/posts/filter/${category}`);
                setFilter(filtered.data)
            }
         
         console.log(res)
         setPosts(res.data)
   
    
        };


 

      
           fetchPosts();
      
        },
[category]);

  

      const [filter, setFilter] = useState([]);

      
  


    return(
        <div className="body" key="Blogs">



<div className="category" >
<button  className="buttons" onClick={async() => {



          
            setFilter(posts)

}} >All</button>

<button  className="buttons" onClick={async() => {
    let category = "My Experience"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


            
              setFilter(posts.filter(isCategory))

}} >My Experiences</button>
<button   className="buttons"onClick={async() => {
    let category = "Cool Ideas"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


              setFilter(posts.filter(isCategory))

 
 }} >Cool Ideas</button>
 <button   className="buttons" onClick={async () => {
    let category = "Thoughts"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


              setFilter(posts.filter(isCategory))

 }} >Thoughts?</button>
 </div>
 <div className="body" key="Blogs">

</div>


<div >
      <Grid
      container
      spacing={3}
      direction="row"
    width="80%"
     
  >

  {filter.map((blogPosts) => (
    <Grid item     width="130%" >
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

    )
})

export default FilterBlogs
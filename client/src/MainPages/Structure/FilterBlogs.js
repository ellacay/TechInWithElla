import React, { useState } from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../Style/FilterBlogs.scss"
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
            console.log("get")
            if(category==="All"){
                setFilter(res.data)

            }else{
              const filtered = await axios.get(`/posts/filter/${category}`);
               console.log("get")
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
        <div className="FilterBlogs" key="Blogs">



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
    let category = "Thoughts?"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


              setFilter(posts.filter(isCategory))

 }} >Thoughts?</button>
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

export default FilterBlogs
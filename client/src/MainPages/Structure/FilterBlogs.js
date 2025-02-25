import React, { useState } from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
import "../Style/FilterBlogs.scss"
   import { useEffect } from "react";
 
   import Card from '@mui/material/Card';
   import CardHeader from '@mui/material/CardHeader';
   import { CardActionArea } from '@mui/material';
import {Helmet} from 'react-helmet'
   import axios from "axios"
   import {
       Grid
     } from '@material-ui/core/'
   
const FilterBlogs = (({history})=>{
    let { category } =
    useParams();
  
 
    const PF = "/images/";
    const [posts, setPosts] = useState([]);



    useEffect(() => {

                  
        const fetchPosts = async () => {
            const res = await axios.get(`/api/posts/`);
                  console.log(res.data)
            if(category==="All"){
              setFilter(res.data)
                       console.log(res.data)

            }else{
              const filtered = await axios.get(`/api/posts/filter/${category}`);
                    console.log(res.data)
                setFilter(filtered.data)
            }
         console.log(res.data)
         setPosts(res.data)
   
    
        };


 

      
           fetchPosts();
      
        },
[category]);

  

      const [filter, setFilter] = useState([]);

      
  


    return(
        <div className="FilterBlogs" key="Blogs">

     <Helmet>
    <title>Tech In With Ella Blogs</title>
    <meta name="description" content="Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose" />
        </Helmet>

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

   {filter.sort(
     function smallestToBiggest(a, b) {
  return new Date(b.createdAt) - new Date(a.createdAt)
})

       .map((blogPosts) => (

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
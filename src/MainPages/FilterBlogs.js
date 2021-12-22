import React, { useState } from 'react'
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

import { slide as Menu } from 'react-burger-menu'

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
  
     
      const useStyles = makeStyles((theme) => ({


        container:{
            position: "relative",
            textAlign: "center",
            color: "white",
          },
          

          body:{
            width:"90%",
            marginRight:"5%",
            marginLeft:"5%",
          },
          card:{
            borderStyle:"solid",
            borderColor:"#b291f2",
            width:"300px",
            height:"300px",
        
         },
         cardHeader:{
         background: "#e2d7f7",
         color:"white",
         fontSize:"1vw",
         display:"flex",
  
 
    
        },
        
        image:{
        
            width: "300px",
            height: "200px",
          
         
        objectFit: "cover"
        
        
        },

 
           
        category:{
        
          borderTop:"solid",
          borderBottom:"solid",
          borderTopWidth:"1px",
          borderBottomWidth:"1px",
          padding:"5px",
          marginBottom:"10px",

         display:"flex",
flexDirection:"row",
  
        
        
        },

                
        buttons:{
        
         borderStyle: "none",
           color:"black",
           backgroundColor:"white",
            marginBottom:"10px",
           width:"100%",
    fontSize:"100%",
            "&:hover": {
                color: "#C29EFC"
              },
          
          },

            }))
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

      
  

    const classes = useStyles()
    return(
        <div className={classes.body} key="Blogs">



<div className={classes.category} >
<button  className={classes.buttons} onClick={async() => {



          
            setFilter(posts)

}} >All</button>

<button  className={classes.buttons} onClick={async() => {
    let category = "My Experience"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


            
              setFilter(posts.filter(isCategory))

}} >My Experiences</button>
<button   className={classes.buttons} onClick={async() => {
    let category = "Cool Ideas"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


              setFilter(posts.filter(isCategory))

 
 }} >Cool Ideas</button>
 <button   className={classes.buttons} onClick={async () => {
    let category = "Thoughts"
    function isCategory(post) {
        console.log("category", category)
                return post.category === category
            
              }


              setFilter(posts.filter(isCategory))

 }} >Thoughts?</button>
 </div>
 <div className={classes.body} key="Blogs">

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
    className={classes.card}
    onClick={() => {
   
      window.location.replace("/post/" + blogPosts._id);
  
  }}
>
    <CardActionArea>
    <CardHeader
    key={blogPosts.title}
    className={classes.cardHeader}
    title={blogPosts.title}
    subheader={new Date(blogPosts.createdAt).toDateString()}
  />
  <img className={classes.image} src={PF + blogPosts.photo} alt="" />

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
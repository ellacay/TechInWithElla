import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { makeStyles } from '@material-ui/core/styles'
import Profile from '../Images/profilePic.JPG';

   import firebase from "firebase";
   import { useEffect } from "react";
   import { useCallback } from "react";
   import Card from '@mui/material/Card';
   import CardHeader from '@mui/material/CardHeader';
   import { CardActionArea } from '@mui/material';
   import { storage } from '../index'
   import axios from "axios"
   import {
       Grid
     } from '@material-ui/core/'
   
const Blog = ((props)=>{

    const useStyles = makeStyles((theme) => ({


   
  }))


    const [posts, setPosts] = useState([]);
 
    const PF = "http://localhost:5000/images/";
   
    
    useEffect(() => {
      console.log(props.category)
      const fetchPosts = async () => {
       const res = await axios.get("/posts");
       console.log(res)
       setPosts(res.data)
     
      };

      fetchPosts();
    
    }, []);
    

     
    
        
        
    const classes = useStyles()
    return(




      <div >
      <Grid
      container
      spacing={3}
      direction="row"
    width="80%"
     
  >

  {posts.map((blogPosts) => (
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
 
    )
})

export default Blog
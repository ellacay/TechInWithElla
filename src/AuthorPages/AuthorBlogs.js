import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { makeStyles } from '@material-ui/core/styles'
import Profile from '../Images/profilePic.JPG';
import Edit from '@mui/icons-material/Edit';
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
   
const AuthorBlogs = (({history})=>{

    const useStyles = makeStyles((theme) => ({


container:{
    position: "relative",
    textAlign: "center",
    color: "white",
  },
  

  card:{
    borderStyle:"solid",
    borderColor:"#b291f2",
    width:"100%",
    height:"100%",

 },
 cardHeader:{
 background: "#e2d7f7",
 color:"white",
 fontSize:"1vw",

},
body :{
  background: "#e2d7f7",
  color:"white",
  fontSize:"1vw",
 height:"100%"
 },

image:{

    width: "100%",
    height: "250px",
  
 
objectFit: "cover"


},

edit:{

backgroundColor:"#e2d7f7",
borderStyle: "none",
marginLeft:"80%",
color:'grey',
},
   
    }))


    const [posts, setPosts] = useState([]);
 
    const PF = "http://localhost:5000/images/";
   
    
    useEffect(() => {
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
    
     
  >

  {posts.map((blogPosts) => (
    <Grid item xs={12} sm={4} md={3} >
    <Card 
    className={classes.card}

    sx={{ maxWidth: 345 }}>

    <CardHeader
    key={blogPosts.title}
    className={classes.cardHeader}
    title={blogPosts.title}
    subheader={new Date(blogPosts.createdAt).toDateString()}
  />
<div  className={classes.body}>
  <img className={classes.image} src={PF + blogPosts.photo} alt="" />


 <button   className={classes.edit}  onClick={() => {
   
    window.location.replace("/editpost/" + blogPosts._id);

}}
><Edit></Edit></button>
  </div>
  </Card>
  </Grid>

))}

  </Grid>
  
  </div>
 
    )
})

export default AuthorBlogs
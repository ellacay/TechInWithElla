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

image:{

    width: "100%",
    height: "250px",
  
 
objectFit: "cover"


},
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
    }
  },
   
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
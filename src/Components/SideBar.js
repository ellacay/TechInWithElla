import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { makeStyles } from '@material-ui/core/styles'
import Profile from '../Images/profilePic.JPG';
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import "../App.css";
   import Blog from './Blog'
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
   
const SideBar = (({history})=>{

    const useStyles = makeStyles((theme) => ({

    

container:{
  borderRadius: "25px",
  borderColor:"black",
  borderWidth:'1px',
  borderStyle:"solid",
  padding: "20px",
  width: "12vw",
  height: "auto",
  margin:"10px",


  },
  

  subscribe:{
  
    width:"100%",

    background: "#e2d7f7",
    padding:"5px",
    borderRadius: "25px",
    textAlign:"center",


 },

  

 about:{
  
textAlign:'center',

},




 subscribeButton:{
  
    margin:"10px",
  background: "#ac82fa",
borderStyle:"none",
borderRadius:"25px",
height:'30px',


},





 categories:{
borderWidth:"1px",
borderLeftColor:"white",
borderRightColor:"white",
borderStyle:"solid",
padding:"2px",

},

image:{

    width: "10px",
    height: "10px",
    borderRadius:"50px",
    display:"flex",
    justifyContent:"center",



  


},

inputs:{

  width: "95%",
  display:"flex",
  justifyContent:"center",



},
align:{

display:"flex",
justifyContent:"center",
flexDirection:"column",


},
   
    }))


    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState(["My Experience", "Cool Ideas", "Thoughts"]);
    const PF = "http://localhost:5000/images/";
   
    
    useEffect(() => {
      const fetchPosts = async () => {
       const res = await axios.get("/posts");
       console.log(res)
       setPosts(res.data)
     
      };
      fetchPosts();
    
    }, []);
    


    const [openSubscribeSuccess, setOpenSubscribeSuccess] = React.useState(false);

    const [subscribeSucessfull, setSubscribeSuccessfull] = React.useState("");
      const handleSubscribeSuccess = () => {
        setSubscribeSuccessfull(true);
      };
  
      const handleSubscribeSuccessClose = () => {
        setSubscribeSuccessfull(false);
      };
  
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    
    const handleSubmit = async (e) => {

      const newSubscription = {
        name,
        email,
      };
      try {
        await axios.post("/subscribe", newSubscription);
        handleSubscribeSuccess()
        setName("")
        setEmail("")
      } catch (err) {}
    };

        
    const classes = useStyles()
    return(



<div className="sideBarContainer">
<Snackbar
open={subscribeSucessfull}
autoHideDuration={2000}
onClose={handleSubscribeSuccessClose}
>
<Alert
  onClose={handleSubscribeSuccessClose}
  severity="success"
  sx={{ width: "100%" }}
>

 {"Subscribed Successfully!"}
</Alert>
</Snackbar>
<div className={classes.align}>
<img className={classes.image} src={Profile} alt=""></img>
<p className={classes.about} >HI, I'M ELLA</p>
<button    className={classes.subscribeButton} >About Me!</button>
</div>
     <p className={classes.categories}>Categories</p>

     <ul listStyle = "none">
{categories.map((categories) => (
    <li  ><Link style={{ textDecoration: 'none' }}  className="link" to={`/filter/${categories}`} >{categories}</Link></li>
))}
</ul>

     <div className={classes.subscribe}>
     <p>Subscribe</p>
     <p>Enter your email to subscribe:</p>
     <input
     className={classes.inputs}
     type="text"
     placeholder="Name"
 
     autoFocus={true}
     onChange={e=>setName(e.target.value)}
   />
     <input
     className={classes.inputs}
     type="text"
     placeholder="Email Address"
 
     autoFocus={true}
     onChange={e=>setEmail(e.target.value)}
   />
     <button    onClick={() => {
   
      handleSubmit()
     }}
  
     className={classes.subscribeButton}>
     
     Subscribe!</button>
     </div>

  </div>
 
    )
})

export default SideBar
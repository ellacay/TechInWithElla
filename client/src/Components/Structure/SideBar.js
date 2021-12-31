import React, { useState } from 'react'
import Profile from '../../Images/profilePic.JPG';
import Snackbar from "@mui/material/Snackbar";
import { Link } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";
import "../Style/SideBar.scss"
   import { useEffect } from "react";
   import axios from "axios"
   import { Button } from "@material-ui/core";
const SideBar = (({history})=>{


    const [posts, setPosts] = useState([]);
    const categories = ["My Experience", "Cool Ideas", "Thoughts?"]

    
    useEffect(() => {
      const fetchPosts = async () => {
       const res = await axios.get("/posts");
       console.log(res)
       setPosts(res.data)
     
      };
      fetchPosts();
    
    }, []);
    


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
<div className="align">
<img className="image" src={Profile} alt=""></img>
<p className="about" >HI, I'M ELLA</p>
<a  href="/about"  className="aboutLink" >About Me!</a>
</div>
     <p className="categories">Categories</p>

     <ul listStyle = "none">
{categories.map((categories) => (
    <li  ><Link style={{ textDecoration: 'none' }}  className="link" to={`/filter/${categories}`} >{categories}</Link></li>
))}
</ul>

     <div className="subscribe">
     <p>Subscribe</p>
     <p>Enter your email to subscribe:</p>
     <input
            className="inputs"
            type="text"
     placeholder="Name"
 
     autoFocus={true}
     onChange={e=>setName(e.target.value)}
   />
     <input
     className="inputs"
     type="text"
     placeholder="Email Address"
 
     autoFocus={true}
     onChange={e=>setEmail(e.target.value)}
   />
     <button    onClick={() => {
   
      handleSubmit()
     }}
  
     className="subscribeButton">
     
     Subscribe!</button>
     </div>

  </div>
 
    )
})

export default SideBar
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from '../Components/SideBar'
import AuthorBlogs from '../AuthorPages/AuthorBlogs'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useEffect } from "react";
   
const Home = (({history})=>{

  const [error, setError] = useState("") 
    const [author, setAuthor] = useState(false) 

  let name = "EllaCay68"
  let password ="blogforlifex"
    const [authorName, setAuthorName] = useState("") 
 const [authorPassword, setAuthorPassword] = useState("") 


    const useStyles = makeStyles((theme) => ({
buttons:{
  width:"100vw",

  display:"flex",
flexDirection:"rows",


},
body:{
  width:"95vw",

    display:"flex",  

  flexDirection:"column",
  
  },
  header:{
   
    display:"flex",
  flexDirection:"row",

  
  },
    
  
    title:{

      textSize:"100%",
        },
    }))

         
  const login = async () => {

  if (authorName === name) {

       if (authorPassword === password) {
      setAuthor(true)
       }
       else {
         
    setError("Incorrect Password")
  
    }
    
  }
  else {
    setError("Incorrect Username")
  }
 
    
     
};
  

    const classes = useStyles()
    return(
<div>
{author ? (

<div className={classes.body} key="Blogs">
<div className={classes.header}  >
<p className={classes.title}  >Author Mode </p>


      <IconButton onClick={() => {
   
        window.location.replace("/writeTechInWithElla")
    
    }}
            key={`addButton`}
         
            className={classes.headerButton}
          >
            <AddIcon></AddIcon>
          </IconButton>
          </div>
<AuthorBlogs></AuthorBlogs>
</div>


        ) : (<div>
            
           
            <input
              type="text"
              placeholder="Username"
  
              autoFocus={true}
              value={authorName}
              onChange={e=>setAuthorName(e.target.value)}
            />
                <input
              type="text"
              placeholder="Password"
          
              autoFocus={true}
              value={authorPassword}
              onChange={e=>setAuthorPassword(e.target.value)}
            />
            <button 
      onClick={() => {
   
    login()
    
              }} >Login</button>
            <p>{error}</p>

</div>)}
</div>
    )
})

export default Home
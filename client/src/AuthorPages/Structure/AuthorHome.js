import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AuthorBlogs from './AuthorBlogs'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import "../Style/AuthorHome.scss";
const Home = (({history})=>{

  const [error, setError] = useState("") 
    const [author, setAuthor] = useState(false) 

  let name = "EllaCay68"
  let password ="blogforlifex"
    const [authorName, setAuthorName] = useState("") 
 const [authorPassword, setAuthorPassword] = useState("") 

         
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
  

 
    return(
<div>
{author ? (

<div className="AuthorHome" key="Blogs">
<div className="header"  >
<p className="title"  >Author Mode </p>


      <IconButton onClick={() => {
   
        window.location.replace("/writeTechInWithElla")
    
    }}
            key={`addButton`}
         
            className="headerButton"
          >
            <AddIcon></AddIcon>
          </IconButton>
            </div>
            <div className="FilterBlogs"> 
              <AuthorBlogs></AuthorBlogs>
              </div>

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
              type="password"
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
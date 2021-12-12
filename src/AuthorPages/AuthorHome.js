import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from '../Components/SideBar'
import AuthorBlogs from '../AuthorPages/AuthorBlogs'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
   
const Home = (({history})=>{

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

  
  }
,
    
  
    title:{

      textSize:"100%",
        },
    }))

         


    const classes = useStyles()
    return(



<div className={classes.body} key="Blogs">
<div className={classes.header}  >
<p className={classes.title}  >Author Mode </p>


      <IconButton onClick={() => {
   
        window.location.replace("/write")
    
    }}
            key={`addButton`}
         
            className={classes.headerButton}
          >
            <AddIcon></AddIcon>
          </IconButton>
          </div>
<AuthorBlogs></AuthorBlogs>
</div>



    )
})

export default Home
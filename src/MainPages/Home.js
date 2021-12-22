import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from '../Components/SideBar'
import Blog from '../Components/Blog'


   
const Home = (({history})=>{

    const useStyles = makeStyles((theme) => ({
body:{
            paddingLeft: "10vw",
            paddingRight: "10vw",

         
            display: "flex",
            justifyContent: "center",
flexDirection: "column"
        },
        blogs:{
                padding: "10vw",
        display: "flex",
            justifyContent:"flex-start"
        }
   
    }))

         


    const classes = useStyles()
    return(
<div key="mainPage" >


<div className={classes.body} key="About"  >
<p>If you teach one girl how to code, she will teach three" - Reshma Saujani, Founder of Girls Who Code</p>
<p>Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose.</p>
</div>

<div className={classes.blogs} key="Blogs">
<Blog></Blog>
</div>


</div>
    )
})

export default Home
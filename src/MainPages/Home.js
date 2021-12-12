import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SideBar from '../Components/SideBar'
import Blog from '../Components/Blog'


   
const Home = (({history})=>{

    const useStyles = makeStyles((theme) => ({
body:{
  width:"90%",
  marginRight:"5%",
  marginLeft:"5%",
}
   
    }))

         


    const classes = useStyles()
    return(
<div key="mainPage" >


<div className={classes.body} key="About"  >
<p>If you teach one girl how to code, she will teach three" - Reshma Saujani, Founder of Girls Who Code</p>
<p>Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose.</p>
</div>

<div className={classes.body} key="Blogs">
<Blog></Blog>
</div>


</div>
    )
})

export default Home
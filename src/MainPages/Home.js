import React, { useState } from 'react'
import '../MainPages/Home.scss'
import Blog from '../Components/Blog'


   
const Home = (({history})=>{

    return(
<div key="mainPage" >


<div className="body" key="About"  >
<p>If you teach one girl how to code, she will teach three" - Reshma Saujani, Founder of Girls Who Code</p>
<p>Tech In With Ella is a discussion onn the technology industry. The ins and outs from the pov of a young woman. The journey taken to learn the skills to code and navigate the complications and problems that arose.</p>
</div>

<div className="blogs" key="Blogs">
<Blog></Blog>
</div>


</div>
    )
})

export default Home
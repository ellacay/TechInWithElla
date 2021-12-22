import React from "react";
import "../App.css";
import Profile from "../Images/profilePic.JPG";
import Contact from "../Images/contactQR.jpeg";

import { makeStyles } from "@material-ui/core/styles";
import { margin } from "@mui/system";
const About = () => {
  const useStyles = makeStyles((theme) => ({


    text: {

    margin:"30px",
    fontFamily: "Quicksand, sans-serif",
    },
    title: {
      display: "flex",
      flexDirection: "column",
      width: "30%",
      fontFamily: "Quicksand, sans-serif",
      fontWeight:'bold',
      fontSize:'1.5em'
    },


      body: {
        padding:"10vw",
      },
      qr:{
          width: "100px",
       alignSelf:"center",
      }
      
   
  }));

  const classes = useStyles();
  return (
   
      <div >
     
        <img
          style={{ cssFloat: "left", margin: "30px" }}
          className="profileImage"
          src={Profile}
          height="100"
          width="100"
          alt="Ella"
              />
              
              <p className={classes.text}>
                     <p className={classes.title}>Ella Cay Smith</p>
          Young females are instrumental in maintaining productivity, creativity
          and passion within the ever-changing workplace. This is especially
          true for developing industries such as technology, which has a current
          growth rate of 4.2% and will reach a $5 trillion market value by the
          end of 2021.
          <br/>
          <br />
          I am a Year 11 student at St Mary’s Anglican Girls’ School and I
          am 16 years old. I am come from Three Springs, a small farming
          community in mid-Western Australia. I was self-inspired to learn to
          code from an early age and throughout primary and high school, I
          developed and honed my skills. I am extremely passionate about
          technology and intends to finish school and complete a computer
          science degree.
          <br/>
          <br/>
          Technology is a developing industry, used in our day to
          day lives. Indeed, forecasts suggest the technology sector will grow
          by 104% between 2018 and 2023. I believes technology is a key element
          in progressing our society, especially to combat social issues, such
          as Climate Change. As the leader of a school club: Help Our Planet
          Earth (HOPE) – formed to encourage environmental awareness within the
          school community – I am passionate about starting initiatives to
          encourage everyday people to be more sustainable. Through HOPE, I have
          actively established recycling initiatives within the school,
          including a recycling station and recycling competitions. Despite
          still being a teenager, my passion and drive for coding has opened
          many opportunities for me. 
          <br/>
          <br/>
          In 2020, I placed first in the St Mary’s i3
          competition, out of a cohort of 190 students. This event is supported
          by many major industry leaders, which enabled me to further my
          experience by completing two weeks of work experience at Ninja
          Software. I found this fascinating and rewarding and was hence
          motivated to continue working on my own personal projects, including
          spending time at She Codes.
          <br/>
          <br/>
          Contact me!
          
      

          </p>
          <img  className={classes.qr} src={Contact} alt="contact"/>
    

      </div>
  
  );
};

export default About;

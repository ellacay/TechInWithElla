import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'

export default function Footer() {

  const user = true;


let lightPurpleColor = "#C29EFC"
let darkPurpleColor = "#5400C0"


const useStyles = makeStyles((theme) => ({
p:{
borderTop:"solid",
borderWidth:"1px",
display:"flex",
    justifyContent: "center",
alignItems:"center",
  },
  
  links:{

display:"flex",
    justifyContent: "center",
alignItems:"center",
}


}))

const classes = useStyles()
  return (
    <div >
      <p className={classes.p}>Copyright LuminK Development</p>
      <div className={classes.links}>     <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i></div>
  
    </div>
  );
}
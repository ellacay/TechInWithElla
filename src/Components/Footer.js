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
justifyContent:"center",
}

}))

const classes = useStyles()
  return (
    <div >
<p className={classes.p}>Copyright LuminK Development</p>

    </div>
  );
}
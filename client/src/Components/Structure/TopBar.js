import { Link } from "react-router-dom";
import "../Style/Topbar.scss";

import Header from '../../Images/header.svg'

export default function Topbar() {

  return (
    <div flexdirection="column">

    <div flexdirection="row">
      <div flexdirection="row">
 
    
        <ul className="topList">
        <li className="topListItem">
        <Link style={{ textDecoration: 'none' }}  className="link" to="/">
          HOME
        </Link>
      </li>
       
          <li className="topListItem">
          <Link style={{ textDecoration: 'none' }} className="link" to="/about">
            ABOUT ME
          </Link>
        </li>
          <li className="topListItem">
          <Link style={{ textDecoration: 'none' }}  className="link" to="/filter/All">
            BLOGS
          </Link>
        </li>

    

       

        </ul>
      </div>
      
      </div>
  <img src={Header} alt="Header" />

  

    </div>
  );
}
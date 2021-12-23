import { Link } from "react-router-dom";
import "./Topbar.scss";

import Header from '../Images/header.svg';

export default function Topbar() {

  return (
    <div flexDirection="column">

    <div flexDirection="row">
      <div flexDirection="row">
 
    
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

    

          <li className="topListItem">
          <Link style={{ textDecoration: 'none' }}  className="link" to="/authorHome">
            AUTHOR
          </Link>
        </li>
       

        </ul>
      </div>
      
      </div>
  <img src={Header} alt="Header" />

  

    </div>
  );
}
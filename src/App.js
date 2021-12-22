import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Blog from './Components/Blog'
import { makeStyles } from '@material-ui/core/styles'
import ContactMe from './Components/Blog'
import Home from '../src/MainPages/Home'
import Post from '../src/MainPages/Post'
import TopBar from './Components/TopBar/TopBar'
import Write from './AuthorPages/Write/Write'
import SideBar from './Components/SideBar'
import EditPost from './AuthorPages/EditPost';
import AuthorBlogs from './AuthorPages/AuthorBlogs';
import Footer from '../src/Components/Footer'
import AuthorHome from './AuthorPages/AuthorHome'
import About from './MainPages/About'
import FilterBlogs from './MainPages/FilterBlogs'

export const Routes = () => {
    const useStyles = makeStyles((theme) => ({
        body:{
         display:"flex",
        
            width: "95wv",
         justifyContent:"center"
        },
        sideBar:{
            width:"1wv",
            marginRight:"auto",
           }
           
  
            }))
        
   
        
        
            const classes = useStyles()

  return (

    
      <Switch>
          <div> 
          <TopBar/>
          <div className={classes.body} >
          
              <Route path="/" exact component={Home} />
              <Route path="/authorHome" exact component={AuthorHome} />
              <Route path="/writeTechInWithElla" exact component={Write} />
              <Route path="/blog" exact component={Blog} />
           
              <Route path="/contactMe" exact component={ContactMe} />
              <Route path="/post/:id" exact component={Post} />
              <Route path="/editPost/:id" exact component={EditPost} />
              <Route path="/about" exact component={About} />
              <Route path="/filter/:category" exact component={FilterBlogs} />
              <Route path="/" className={classes.sideBar} exact component={SideBar} />
      

      
   
      
              <Route path="/post/:id" className={classes.sideBar} exact component={SideBar} />


              <Route path="/filter/:category" className={classes.sideBar} exact component={SideBar} />
          </div>
          <Footer/>
          </div>
      </Switch>
  )
}

export const App = () => {
  return (
      <Router>
          <Routes />
      </Router>
  )
}

export default App

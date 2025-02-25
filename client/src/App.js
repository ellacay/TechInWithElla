import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import Home from './MainPages/Structure/Home'
import Post from './MainPages/Structure/Post'
import TopBar from './Components/Structure/TopBar'
import Write from './AuthorPages/Structure/Write'
import SideBar from './Components/Structure/SideBar'
import EditPost from './AuthorPages/Structure/EditPost';
import Footer from './Components/Structure/Footer'
import AuthorHome from './AuthorPages/Structure/AuthorHome'
import About from './MainPages/Structure/About'
import FilterBlogs from './MainPages/Structure/FilterBlogs'

export const Routes = () => {
    const useStyles = makeStyles((theme) => ({
        body:{
         display:"flex",
          justifyContent: "center",
            width: "95wv",
    
        },
        sideBar:{
            width:"1wv",
            marginRight:"auto",
           }
           
  
            }))
        
   
        
        
            const classes = useStyles()

  return (

    
    <div> 
          <div> 
          <TopBar/>
          <div className={classes.body} >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/authorHome" exact component={AuthorHome} />
              <Route path="/writeTechInWithElla" exact component={Write} />
  
      
              <Route path="/post/:id" exact component={Post} />
              <Route path="/editPost/:id" exact component={EditPost} />
              <Route path="/about" exact component={About} />
              <Route path="/filter/:category" exact component={FilterBlogs} />
        
                  </Switch>
                        <Route path="/" className={classes.sideBar} exact component={SideBar} />
              <Route path="/post/:id" className={classes.sideBar} exact component={SideBar} />
              <Route path="/filter/:category" className={classes.sideBar} exact component={SideBar} />
          </div>
          <Footer/>
          </div>
              </div>
    
  )
}

export const App = () => {
  return (
      <Router basename="/">
          <Routes />
      </Router>
  )
}

export default App

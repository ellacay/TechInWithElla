
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import MuiAlert from "@mui/material/Alert";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { set } from "@firebase/database";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios"
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from "@material-ui/core";
import Divider from '@mui/material/Divider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';


const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const Post = (()=>{

    
  let { id } =
  useParams();


  const [post, setPost] = React.useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postId, setPostId] = React.useState("");
  useEffect(() => {
    const getPost = async () => {
      const posts = await axios.get("/posts/" + id);
      setPost(posts.data);
      setTitle(posts.data.title);
      setDesc(posts.data.desc);
      setPostId(posts.data._id)
   
        
      const comments = await axios.get(`/comment/${posts.data._id}`);
      console.log(comments)
      setComments(comments.data)
      setReplies(comments.data)
      const replies = await axios.get(`/comment/replies/${posts.data._id}`);
      console.log(replies)

    
     };

    getPost();
  }, [id]);


    







    const [openError, setOpenError] = React.useState(false);

    const [error, setError] = React.useState("");
      const handleError = () => {
        setOpenError(!openError);
      };
  
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

      const PF = "http://localhost:5000/images/";
   

      const useStyles = makeStyles((theme) => ({

        writeImg:{
          
          width: "100%",
          height: "250px",         
           borderRadius: "10px",
          objectFit: "cover",
          marginTop:"2%",
        },
        body:{
          
          width:"80%",
          marginLeft:"5%",
      
      
        },
        markdown:{
          
          width: "60vw",
          margin:'1px',
        
      
        },
        commentHeader:{
         display:'flex',
         flexDirection:"row", 
     backgroundColor:"#d6d6d4",
     width:"100%",
        
      
        },
        commentBody:{
          
          
          margin:'1px',
          borderStyle:"solid",
          borderColor:"#d6d6d4",
          borderRadius:"15px",
          width:"100%",
      

        },
        replyBody:{
          
          
          marginLeft:'5%',
          marginTop:"10px",   marginBottom:"10px",
          borderStyle:"solid",
          borderColor:"#d6d6d4",
          borderRadius:"15px",
          width:"95%",
      

        },

        line:{
          
       borderLeft:"solid",


        },

        addBody:{
          
          
          margin:'1px',
      
      
          width:"100%",
      
      

        },

        addCommentBody:{
          
          flexDirection:"row", 
          margin:'1px',
          
 
      

        },
    addCommentButton:{
backgroundColor:"#2195ed"
    },

        textArea:{
          
          
          margin:'1px',
        
      
          width:"100%",
      
        },
        commentSection:{
          
          display:'flex',
          flexDirection:"column", 
          width:"100%",
      
        },
        commentText:{
          
          margin:"1%",
      
        },commentName:{
          color:"#2195ed",
          marginLeft: "1%",
          marginRight:"2%",
        },  commentWrite:{
          
         width:"50%",
      
        },  arrow:{
         borderLeft:"Solid",
         borderWidth:"1px",
         }
        

        
        
      }))

      const [comments, setComments] = useState([]);
      const [replies, setReplies] = useState(["hey","2"]);

   
      const [reply, setReply] = useState(false);
      const [replyTo, setReplyTo] = useState("new");
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [content, setContent] = useState(null);

    
  
      const handleComment= async (e) => {
      
 
        const newComment = {
          name,
          email,
          postId,
          content,
          replyTo,
        };
        
        try {
          console.log(name)
          console.log(email)
          console.log(content)
          await axios.post("/comment", newComment);
          console.log("bingo")
          window.location.replace("/post/" + postId);
        } catch (err) {}
      };


     
function ReplyTernary(props) {
    
        if (reply) {
          console.log(props.commentId)
          console.log(replyTo)
          if(replyTo===props.commentId){
            return (
             <AddComment reply={replyTo} ></AddComment>
            )
          }
          return <div/>
        }
        return <div/>
       
      }
    
      
 
   
  

      function AddComment(props) {
    
        const [replyTo, setReplyTo] = useState(props.reply);

        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [content, setContent] = useState(null);

     return(   <div className={classes.body} >
    
   
    <div  className={classes.addCommentBody} >

  <input className={classes.inputInfo}   value={name}
  onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"></input>
      <input className={classes.inputInfo}   value={email}
      onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"></input>
   
      <textarea value={content}
      onChange={(e) => setContent(e.target.value)} className={classes.textArea}  placeholder= "Join the discussion!"/>
   
      </div>
      <button   onClick={() => { 



        const newComment = {
        name,
        email,
        postId,
        content,
        replyTo,
      };
      
      try {
        console.log(name)
        console.log(email)
        console.log(content)
        console.log(replyTo)
         axios.post("/comment", newComment);
        console.log("bingo")
        window.location.replace("/post/" + postId);
      
      } catch (err) {}}} className={classes.commentButton}>Add Comment</button>
  </div>)
 
   }


      const classes = useStyles()
    return(
        <div className={classes.body}>
        <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleError}
      >
        <Alert
          onClose={handleError}
          severity="success"
          sx={{ width: "100%" }}
        >

         {error}
        </Alert>
      </Snackbar>
      <div className={classes.body}>
      {post.photo && <img className={classes.writeImg} src={PF + post.photo} alt="" />}

        <h2 >{title}</h2>
       
        <ReactMarkdown className={classes.markdown}  >{desc}</ReactMarkdown>
  
        </div>

        <div className={classes.commentSection}>
     
        <div >


        <div className={classes.body} >
        <h3>Comments</h3>
        {comments.map(comments => {
            if(comments.replyTo === "new")
            return(
            <div>
 
                 <div className={classes.commentBody}>
            <div className={classes.commentHeader}>
            <p  className={classes.commentName}>{comments.name}</p>
            <br/>
            <p>{new Date(comments.createdAt).toDateString()}</p>

          <Button  onClick={() => {
            setReply(!reply)
        
            setReplyTo(comments._id)
       
             
             }}
             className={classes.commentName} >Reply</Button>
            </div>
       
            <ReactMarkdown className={classes.commentText} >{comments.content}</ReactMarkdown>
          
          </div>
      <div  >
    <div className={classes.arrow}/>
    <ReplyTernary commentId={comments._id}></ReplyTernary>

          {replies.map(reply => {
            if(reply.replyTo === comments._id)
            return(<div >
       
              <div className={classes.replyBody}>
              
   
              <div >
              <div className={classes.commentHeader}>
              <p  className={classes.commentName}>{reply.name}</p>
              <br/>
              <p>{new Date(reply.createdAt).toDateString()}</p>
  
           
              </div>
         
              <ReactMarkdown className={classes.commentText} >{reply.content}</ReactMarkdown>
            
            </div>
      
       </div>
  
         </div>)

         return<div/>
            
          }
          
        )}
        
        </div>
          <div>
      
          </div>

            </div>)
            return<div/>
        })}
        
        </div>
          
          </div>
          
        </div>
     
        <div className={classes.body} >
    
      <h4 >Add Comment</h4>
         
          <div  className={classes.addCommentBody} >

        <input className={classes.inputInfo}   value={name}
        onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"></input>
            <input className={classes.inputInfo}   value={email}
            onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"></input>
         
            <textarea value={content}
            onChange={(e) => setContent(e.target.value)} className={classes.textArea}  placeholder= "Join the discussion!"/>
         
            </div>
            <button   onClick={() => handleComment()} className={classes.commentButton}>Add Comment</button>
        </div>
        </div>
    )})

    export default Post
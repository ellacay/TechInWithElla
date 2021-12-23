
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import MuiAlert from "@mui/material/Alert";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles'
import { Button } from "@material-ui/core";
import "../MainPages/Post.scss"
import "../App.css"

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

     return(   <div className="body">
    
   
    <div  className="addCommentBody" >

  <input className="inputInfo"  value={name}
  onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"></input>
      <input className="inputInfo"  value={email}
      onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"></input>
   
      <textarea value={content}
      onChange={(e) => setContent(e.target.value)} className="textArea"  placeholder= "Join the discussion!"/>
   
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
      
      } catch (err) {}}} className="commentBody">Add Comment</button>
  </div>)
 
   }


  
    return(
        <div className="body">
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
    
    

        
          <div className="textBody" >
          <h2 className="title" >{title}</h2>  {post.photo && <img className="writeImg" src={PF + post.photo} alt="" />}
        <ReactMarkdown>{desc}</ReactMarkdown>
</div>
       
        

 

        <div className="commentSection" >
        <h3>Comments</h3>
        {comments.map(comments => {
            if(comments.replyTo === "new")
            return(
            <div>
 
                 <div className="commentBody">
            <div className="commentHeader">
            <p  className="commentName">{comments.name}</p>
            <br/>
            <p>{new Date(comments.createdAt).toDateString()}</p>

          <Button  onClick={() => {
            setReply(!reply)
        
            setReplyTo(comments._id)
       
             
             }}
             className="commentName">Reply</Button>
            </div>
       
            <ReactMarkdown className="commentText" >{comments.content}</ReactMarkdown>
          
          </div>
      <div  >
    <div className="arrow"/>
    <ReplyTernary commentId={comments._id}></ReplyTernary>

          {replies.map(reply => {
            if(reply.replyTo === comments._id)
            return(<div >
       
              <div className="replyBody">
              
   
              <div >
              <div className="commentHeader">
              <p  className="commentName">{reply.name}</p>
              <br/>
              <p>{new Date(reply.createdAt).toDateString()}</p>
  
           
              </div>
         
              <ReactMarkdown className="commentText">{reply.content}</ReactMarkdown>
            
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
          
        
          
    
     
        <div className="AddComment" >
    
      <h4 >Add Comment</h4>
         
          <div  className="addCommentBody" >

        <input className="inputInfo"    value={name}
        onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"></input>
            <input className="inputInfo"  value={email}
            onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"></input>
         
            <textarea value={content}
            onChange={(e) => setContent(e.target.value)} className="textArea"  placeholder= "Join the discussion!"/>
         
            </div>
            <button   onClick={() => handleComment()} className="commentButton">Add Comment</button>
        </div>
        </div>
    )})

    export default Post
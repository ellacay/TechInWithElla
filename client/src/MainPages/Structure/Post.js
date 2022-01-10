
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios"
import { Button } from "@material-ui/core";
import "../Style/Post.scss"
import "../../App.css"
import {Helmet} from 'react-helmet'
const Post = (()=>{

    
  let { id } =
  useParams();


  const [post, setPost] = React.useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [postId, setPostId] = React.useState("");
  useEffect(() => {
    const getPost = async () => {
      const posts = await axios.get("/api/posts/" + id);
      setPost(posts.data);
      setTitle(posts.data.title);
      setDesc(posts.data.desc);
      setPostId(posts.data._id)
   
        
      const comments = await axios.get(`/api/comment/${posts.data._id}`);
      console.log(comments)
      setComments(comments.data)
      setReplies(comments.data)
      const replies = await axios.get(`/api/comment/replies/${posts.data._id}`);
      console.log(replies)

    
     };

    getPost();
  }, [id]);


    







      const PF = "/images/";
   


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
          await axios.post("/api/comment", newComment);
   
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

     return(   <div className="Post">
    
       
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
         axios.post("/api/comment", newComment);

        window.location.replace("/post/" + postId);
      
      } catch (err) {}}} className="commentBody">Add Comment</button>
  </div>)
 
   }


  
    return(
        <div className="postBody">
 
    
      
           <Helmet>
    <title>{title}</title>
    <meta name="description" content={desc} />
      </Helmet>

        
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
<div className="addCommentID" >   <input id="nameComment" className="inputInfo"    value={name}
        onChange={(e) => setName(e.target.value)} type="text" placeholder="Name"></input>
            <input className="inputInfo"  value={email}
            onChange={(e) => setEmail(e.target.value)} type="text"  placeholder="Email"></input> </div>
      
         
            <textarea value={content}
            onChange={(e) => setContent(e.target.value)} className="textArea"  placeholder= "Join the discussion!"/>
         
            </div>
            <button   onClick={() => handleComment()} className="subscribeButton">Add Comment</button>
        </div>
        </div>
    )})

    export default Post
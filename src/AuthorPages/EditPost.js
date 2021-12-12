
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";
import MuiAlert from "@mui/material/Alert";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import { set } from "@firebase/database";
import axios from "axios"

import { makeStyles } from '@material-ui/core/styles'

const EditPost = (()=>{

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
  let { id } =
  useParams();



  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id);
      setTitle(res.data.title);
      setDesc(res.data.desc);
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
   
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [comment, setComment] = useState(null);
      const [postId, setPostId] = useState(null);

      const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          title,
          desc,
        };
   
        try {
          const res = await axios.put(`/posts/${id}`, newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

      const useStyles = makeStyles((theme) => ({

        writeImg:{
          
          width: "90%",
          height: "250px",         
           borderRadius: "10px",
          objectFit: "cover",
        },
        body:{
          
          width: "100%",
          margin:'1px',
        
      
        }
        
        
      }))


      const classes = useStyles()
      
    return(
        <div >
        {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
     
          <button className="writeSubmit" 
          onClick={() => {
   
         axios.delete(`/posts/${id}`);
            window.location.replace("/authorHome/");
        }}
        >
        Delete
      </button>
        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
  
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              value={title}
              onChange={e=>setTitle(e.target.value)}
            />
     
            
  
          </div>
          
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your story..."
              type="text"
              value={desc}
              className="writeInput writeText"
              onChange={e=>setDesc(e.target.value)}
            ></textarea>
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
          
          
        </form>

     

      </div>
    )})

    export default EditPost
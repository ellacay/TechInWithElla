
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useParams } from "react-router-dom";

import axios from "axios"


const EditPost = (()=>{

  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
    const [category, setCategory] = useState("");
        const [newPhoto, setNewPhoto] = useState(false)
  const [desc, setDesc] = useState("");
     const [file, setFile] = useState(null);
  
  const addPhoto = async (e) => {
        setFile(e)
    setNewPhoto(true)
        };

 
 
  let { id } =
  useParams();


      const PF = "http://localhost:3001/images/";
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id);
      setTitle(res.data.title);
      setDesc(res.data.desc);
      setPhoto(res.data.photo)
      setCategory(res.data.category)
    };
    getPost();
  }, [id]);


  
   

      const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          title,
          desc,
          category,
          photo,
        
        };
   
        try {
          const res = await axios.put(`/posts/${id}`, newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };


      
    return(
      <div className="write" >
        
        {newPhoto ? (<div>    {file && (
          <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}</div>):(<div> 
        {photo && <img className="writeImg" src={PF + photo} alt="" />}
        </div>)}
    
    

        <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => addPhoto(e.target.files[0])}
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
          <div className='ButtonGroup'>     <button className='writeButton' type="submit">
            Publish
          </button>
              <button       onClick={() => {
   
         axios.delete(`/posts/${id}`);
            window.location.replace("/authorHome/");
        }}  className='writeButton' >
            Delete
          </button></div>
     
          
        </form>

     

      </div>
    )})

    export default EditPost
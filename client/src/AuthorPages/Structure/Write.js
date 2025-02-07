import { useState } from "react";
import "../Style/Write.scss"
import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

        const [category, setCategory] = React.useState('');

        const handleCategory = (event) => {
          setCategory(event.target.value);
        };


  const handleSubmit = async (e) => {
    let photo = ""
    e.preventDefault();
    const newPost = {
      title,
      desc,
      category,
      photo,
    };
    if (file) {
      const data =new FormData();
      console.log(file.name)
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
    
      const res = await axios.post("/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
   
   
 

     {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
          

            onChange={(e) => {
   
              setFile(e.target.files[0])

          
          }}
          />

          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
             <Box            className="selectCategory" sx={{ minWidth: 120 }}> <FormControl fullWidth> <InputLabel value={category}>Category</InputLabel>
        <Select
        
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          <MenuItem value={"My Experience"}>My Experience</MenuItem>
          <MenuItem value={"Cool Ideas"}>Cool Ideas</MenuItem>
          <MenuItem value={"Thoughts?"}>Thoughts?</MenuItem>
        </Select>
      </FormControl>
    </Box>

          

        </div>
              <p>* Note ony png, jpeg and jpg accepted</p>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeButton" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
import { useState } from "react";
import "./Write.css";
import axios from "axios";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from '@material-ui/core/styles'

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const useStyles = makeStyles((theme) => ({


        }))
    
        const [category, setCategory] = React.useState('');

        const handleCategory = (event) => {
          setCategory(event.target.value);
        };

        
        const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

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
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
    
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
   
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel value={category}id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
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
    <p>* Note ony png, jpeg and jpg accepted</p>
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
   
          

        </div>
        
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
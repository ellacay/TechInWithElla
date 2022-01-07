import { useState } from "react";
import "../AuthorPages/Write/Write.css";
import axios from "axios";


export default function Comments(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState(null);
let postId = props.id
console.log(props.id)

         
        
  const handleSubmit = async (e) => {
    console.log("hey")
    e.preventDefault();
    const newComment = {
      name,
      email,
      postId,
      content,
    };
    
    try {
      console.log("post",postId)
      const res = await axios.post("/api/comment", newComment);
      console.log("bingo")
      window.location.replace("/post/" + res.data.postId);
    } catch (err) {}
  };
  return (
    <div className="write">
    
   
     
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
       
          
          <input
            type="text"
            placeholder="Name"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setName(e.target.value)}
          />
   
          

        </div>

        <div className="writeFormGroup">
       
          
        <input
          type="text"
          placeholder="Email"
          className="writeInput"
          autoFocus={true}
          onChange={e=>setEmail(e.target.value)}
        />
 
        

      </div>
        
        <div className="writeFormGroup">
          <textarea
            placeholder="Join the discussion"
            type="text"
            className="writeInput writeText"
            onChange={e=>setContent(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
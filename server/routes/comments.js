const router = require("express").Router();
const Comments = require("../models/Comments");

//CREATE POST
router.post("/", async (req, res) => {

  console.log("1")
  const newComment = new Comments(req.body);
  try {
    console.log("2")
    const savedComment =  newComment.save();
    console.log("3")
    res.status(200).json(savedComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
 
    const post = await Post.findById(req.params.id);
    try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
    const comments = await Comments.findById(req.params.id);
    try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }

});

//GET COMMENTS FOR POST
router.get("/:id", async (req, res) => {

  const commentPostId = req.params.id


  try {
    let comments;

    comments = await Comments.find({postId:{
      $in: [commentPostId]
    }})
    res.status(200).json(comments);

  }
  
   
  catch (err) {
    res.status(500).json(err);
  }
});

// Get All replies
router.get("/replies/:id", async (req, res) => {

  const commentPostId = req.params.id


  try {
    let comments;

    comments = await Comments.find({replyTo:{
      $in: [!"New"]
    }})

    res.status(200).json(comments);
  }
  
   
  catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
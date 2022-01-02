const router = require("express").Router();
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
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
    const post = await Post.findById(req.params.id);
    try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }

});

//GET POST
router.get("/:id", async (req, res) => {
  console.log("1523")
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/filter/:category", async (req, res) => {

  const categoryQuery = req.params.category.toString()


  try {
    let query;
console.log(categoryQuery)
query = await Post.find({category:{
  $in: categoryQuery
}})
    
    console.log("hey",query)
    res.status(200).json(query);
  

  }
  
   
  catch (err) {
    res.status(500).json(err);
  }
});




//GET ALL POSTS
router.get("/", async (req, res) => {
    console.log("274832")
    try {
        const posts = await Post.find()
      res.status(200).json(posts);
         console.log("good")
      
      } catch (err) {
      res.status(500).json(err);
          console.log("bad")
      }
});

module.exports = router;
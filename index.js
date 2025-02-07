const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const subscribeRoute = require("./routes/subscribe");

const PORT = process.env.PORT || 5000;
const multer = require("multer");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});



app.use("/api/posts", postRoute);
app.use("/api/comment", commentRoute);
app.use("/api/subscribe", subscribeRoute);



if (process.env.NODE_ENV === 'production') {  
    app.use(express.static(path.join(__dirname, "client/build")));
    app.get("/*", (_, res) => {
     res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

app.listen(PORT, () => {
  console.log('Backend is running');
});
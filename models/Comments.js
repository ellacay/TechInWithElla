const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
name:{
type:String,
required: true,

},
email:{
    type:String,
required: true,

},

postId:{
    type:String,
    required: true,
},
content:{
    type: String,
    required: true
},

replyTo:{
    type: String,
    required: true
},

},{timestamps: true})

module.exports = mongoose.model("Comments", CommentSchema)
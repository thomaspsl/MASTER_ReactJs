const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: Date
}, { timestamps: false, versionKey: false });

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };

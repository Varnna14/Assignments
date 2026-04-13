const express=require("express");
const router=express.Router();
const Post=require("../models/Post");

router.post("/posts", async (req, res) => {
  const post=new Post(req.body);
  const saved=await post.save();
  res.json(saved);
});

// READ
router.get("/posts", async (req, res) => {
  const posts=await Post.find();
  res.json(posts);
});

module.exports=router;
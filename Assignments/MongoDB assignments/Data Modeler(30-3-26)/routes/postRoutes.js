const express=require("express");
const router=express.Router();
const Post=require("../models/Post");
const User=require("../models/User");

router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/",async(req,res)=>{
    const posts=await Post.find().populate("author","-password");
    res.json(posts);
});
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports=router;
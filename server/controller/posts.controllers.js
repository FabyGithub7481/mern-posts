import Post from "../models/Posts.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.send("Get posts");
};
export const createPosts = async (req, res) => {
  //console.log(req.body);ç
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  //console.log(post);
  await newPost.save();
  return res.json(newPost);
};
export const updatePost = (req, res) => res.send("update posts");
export const deletePost = (req, res) => res.send("delete posts");
export const getPost = (req, res) => res.send("Get post");

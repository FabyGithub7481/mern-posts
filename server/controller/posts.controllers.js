import Post from "../models/Posts.js";

export const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.send(posts);
};
export const createPosts = async (req, res) => {
  //console.log(req.body);ç
  const { title, description } = req.body;
  const newPost = new Post({ title, description });
  //console.log(post);
  await newPost.save();
  return res.json(newPost);
};
export const updatePost = async (req, res) => {
  /* console.log(req.params)
     console.log(req.body) */
  const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  //console.log(postUpdated)

  res.send(postUpdated);
};
export const deletePost = async (req, res) => {
  const postDelete = await Post.findByIdAndDelete(req.params.id);
  if (!postDelete) {
    res.sendStatus(404).send("Post not found");
  }
  res.sendStatus(204);
  //res.send(postDelete);
};
export const getPost = async (req, res) => {
  const postFound = await Post.findById(req.params.id);
  if (!postFound) {
    res.sendStatus(404).send("Post not found");
  }
  res.send(postFound);
};

import Post from "../models/Posts.js";
import {
  ERROR_GET_POSTS,
  ERROR_CREATE_POST,
  ERROR_UPDATE_POST,
  ERROR_DELETE_POST,
  ERROR_GET_POST,
} from "../config.js";

export const getPosts = async (req, res) => {
  try {
    //throw new Error("este es un error personalizado")
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${ERROR_GET_POSTS} / ${error.message}` });
  }
};

export const createPosts = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newPost = new Post({ title, description });
    await newPost.save();
    return res.json(newPost);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `${ERROR_CREATE_POST} / ${error.message}` });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(postUpdated);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `${ERROR_UPDATE_POST} / ${error.message}` });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postDelete = await Post.findByIdAndDelete(req.params.id);
    if (!postDelete) {
      res.sendStatus(404).send("Post not found");
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `${ERROR_DELETE_POST} / ${error.message}` });
  }
};

export const getPost = async (req, res) => {
  try {
    const postFound = await Post.findById(req.params.id);
    if (!postFound) {
      res.sendStatus(404).send("Post not found");
    }
    res.send(postFound);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${ERROR_GET_POST} / ${error.message}` });
  }
};

import { createContext, useState, useContext, useEffect } from "react";
import {
  getPostsRequest,
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  updatePostRequest,
} from "../api/posts.js";

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  //console.log(posts);
  const getPosts = async () => {
    const res = await getPostsRequest();
    //setPosts([]);

    setPosts(res.data);
    //aqui se produce empieza a
  };

  const createPost = async (post) => {
    try {
      //console.log({ postcontext: post });
      const res = await createPostRequest(post);
      console.log(res)
      setPosts([...posts, res.data]);
      //console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (id) => {
    const res = await deletePostRequest(id);
    if (res.status === 204) {
      setPosts(posts.filter((post) => post._id !== id));
    }
    //console.log(res)
    //console.log(id);
  };

  const getPost = async (id) => {
    const res = await getPostRequest(id);
    //console.log(res.data);
    return res.data;
  };

  const updatePost = async (id, post) => {
    const res = await updatePostRequest(id, post);
    setPosts(posts.map((post) => (post._id === id ? res.data : post)));

    //console.log(res);
  };

  useEffect(() => {
    getPosts();
  });
  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

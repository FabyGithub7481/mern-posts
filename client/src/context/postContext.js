import { createContext, useState, useContext, useEffect } from "react";
import { getPostsRequest, createPostRequest } from "../api/posts.js";

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
    //console.log(res)
  };

  const createPost = async (post) => {
    //console.log({ postcontext: post });
    const res = await createPostRequest(post)
    console.log(res.data)
  };
  useEffect(() => {
    getPosts();
  });
  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
        createPost
      }}
    >
      {children}
    </postContext.Provider>
  );
};

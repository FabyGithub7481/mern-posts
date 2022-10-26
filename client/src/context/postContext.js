import { createContext, useState, useContext } from "react";
import { getPostsRequest } from "../api/posts.js";

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
    setPosts(res.data);
    //console.log(res)
  };
  return (
    <postContext.Provider
      value={{
        posts,
        getPosts,
      }}
    >
      {children}
    </postContext.Provider>
  );
};

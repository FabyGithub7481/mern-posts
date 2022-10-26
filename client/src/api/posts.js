import axios from "axios";


export const getPostsRequest = async () => await axios.get("/posts");
export const createPostRequest = async (post) => await axios.post("/posts", post);

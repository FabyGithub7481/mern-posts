import axios from "axios";


export const getPostsRequest = async () => await axios.get("/posts");

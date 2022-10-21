import { Router } from "express";
import app from "../app.js";
import {getPosts,createPosts, updatePost, deletePost, getPost} from '../controller/posts.controllers.js'



const router = Router();

router.get("/posts",  getPosts);
router.post("/posts", createPosts);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);
router.get("/posts/:id", getPost);

export default router;

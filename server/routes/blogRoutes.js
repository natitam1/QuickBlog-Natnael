import express from "express";
import { addBlog } from "../controller/blogController.js";

const blogRouter = express.Router();

blogRouter.post("/add", addBlog);

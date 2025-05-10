import { Router } from 'express';
import { GetPosts, AddPost } from '../controllers/post.controller';


const router: Router = Router();

// this route list all posts
router.get("/", GetPosts)

// this route creates a post
router.post("/", AddPost);


export default router;
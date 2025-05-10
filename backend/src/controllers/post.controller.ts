import { Request, Response } from "express";
import { createPost, getPosts } from "../services/post.service";
import { PostRequest } from "../@types/post";


export const GetPosts = async (request: Request, response: Response) => {
    try{
        const posts = await getPosts();
        response.status(200).json({"message": posts});
    }catch(error){
        // log the error
        response.status(500).json({"message": "failed to retrieve post"});
    }
}

export const AddPost = async (request: Request<{}, {}, PostRequest>, response: Response) => {
    try{
        const post = await createPost(request.body);
        response.status(200).json({"message": post});
    }catch(error){
        // log the error
        response.status(500).json({"message": "failed to create new post"});
    }
}



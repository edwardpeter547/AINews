import { prisma } from "../config/database";
import { Post } from "@prisma/client";
import { PostRequest } from "../@types/post";



export const createPost = async (data: PostRequest) => {

    try {
        const savedPost = await prisma.post.create({data})
        return savedPost;
    }catch(error){
        console.log(`Error creating post. message=${error}`);
        throw error;
    }
    
}


export const getPosts = async () => {
    try{
        const posts: Post[] = await prisma.post.findMany();
        return posts;
    }catch(error){
        console.error(`Error occurred listing post ${error}`);
        throw error;
    }
}



export const getPostById = async (id: number) => {
    try{
        const post = await prisma.post.findUnique({
            where: {id},
        });
        return post;
    }catch(error){
        console.error(`Error fetching post with id=${id} : message=${error}`);
        throw error;
    }
}



export const deletePost = async (postId: number) => {
    try{
        const deletedPost = await prisma.post.delete({
            where: {id: postId},
        });
        return deletedPost;
    }catch(error){
        console.error(`Error deleting post with id=${postId} message=${error}`);
        throw error;
    }
}



export const updatePost = async (postId: number, data: Partial<PostRequest>) => {
    try{
        const updatedPost = await prisma.post.update({
            where: {id: postId}, 
            data
        });
        return updatedPost;

    }catch(error){
        console.error(`Error updating post with id=${postId} message=${error}`);
        throw error;
    }
}


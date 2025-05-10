import { User } from "@prisma/client";
import { UserRequest } from "../@types/user";
import { prisma } from "../config/database";



export const createUser = async (data: UserRequest) => {

    try {
        const savedUser: User = await prisma.user.create({data});
        return savedUser;
    }catch(error){
        console.log(`Error creating user. message=${error}`);
        throw error;
    }
    
}



export const getUsers = async () => {
    try{
        const users: User[] = await prisma.user.findMany();
        return users;
    }catch(error){
        console.error(`Error occurred listing users ${error}`);
        throw error;
    }
}



export const getUserById = async (id: number) => {
    try{
        const user = await prisma.user.findUnique({
            where: {id},
            include: {
                posts: true,
                profile: true,
            },
        });
        return user;
    }catch(error){
        console.error(`Error fetching user with id=${id} : message=${error}`);
        throw error;
    }
}



export const deleteUser = async (userId: number) => {
    try{
        const deletedUser = await prisma.user.delete({
            where: {id: userId},
        });
        return deletedUser;
    }catch(error){
        console.error(`Error deleting user with id=${userId} message=${error}`);
        throw error;
    }
}



export const updateUser = async (userId: number, data: Partial<UserRequest>) => {
    try{
        const updatedUser = await prisma.user.update({
            where: {id: userId}, 
            data
        });
        return updatedUser;

    }catch(error){
        console.error(`Error updating user with id=${userId} message=${error}`);
        throw error;
    }
}


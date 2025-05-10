import { Request, Response } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../services/user.service";
import { UserRequest } from "../@types/user";


export const AddUser = async (request: Request<{}, {}, UserRequest>, response: Response) => {
    const user = await createUser(request.body);
    response.status(200).json({"message": user});
}

export const GetUsers = async(request: Request, response: Response) => {
    const users = await getUsers();
    response.status(200).json({"message": users});
}

export const GetUserById = async(request: Request<{id: string}>, response: Response) => {
    const userId: string = request.params.id;
    const user = await getUserById(+userId);
    response.status(200).json({"message": user});
}

export const UpdateUser = async (request: Request<{id: string}, {}, UserRequest>, response: Response) => {
    const userId: string = request.params.id;
    const user = await updateUser(+userId, request.body);
    response.status(200).json({"message": user});
}

export const DeleteUser = async (request: Request<{id: string}>, response: Response) => {
    const {id} = await deleteUser(+request.params.id);
    response.status(200).json({"message": `user with id=${id} has been deleted`});
}


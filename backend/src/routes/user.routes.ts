import { Router } from "express";
import { AddUser, GetUsers, GetUserById, UpdateUser, DeleteUser} from "../controllers/user.controller";

const router = Router();


// this route creates a new user
router.post("/", AddUser);

// this route list all users
router.get("/", GetUsers);

// this route gets a user by id
router.get("/:id", GetUserById);

// this route updates a user by id
router.put("/:id", UpdateUser);

// this route deletes a user by id
router.delete("/:id", DeleteUser);


export default router;

interface UserBase {
    firstName: string;
    lastName: string;
    email: string;
    mobile?: string;
    address?: string; 
}

export interface UserRequest extends UserBase {
    password: string;
}
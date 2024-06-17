import { User } from "./user.entity";

export interface UserResponce {
    token: string;
    user: User;
}
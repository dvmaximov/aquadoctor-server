import { User } from "./user.entity";

export interface AdminLink  {
    title: string;
    caption: string;
    icon: string;
    link: string;
  };

export interface UserResponse {
    token: string;
    user: User;
    links?: AdminLink[];
}
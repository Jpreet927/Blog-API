import { Post } from "./Post";

export type User = {
    _id: string;
    token: string;
    username: string;
    avatar?: string;
    email: string;
    password?: string;
    isAuthor: boolean;
    isAdmin: boolean;
    posts: Post[];
};

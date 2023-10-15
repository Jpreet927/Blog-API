import { Post } from "./Post";

export type User = {
    _id: string;
    username: string;
    avatar?: string;
    email: string;
    password: string;
    isAuthor: boolean;
    isAdmin: boolean;
    posts: Post[];
};

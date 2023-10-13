import { User } from "./User";

export type Post = {
    _id: string;
    title: string;
    content: string;
    author: User;
    image: string;
    datetime: string;
    published: boolean;
};

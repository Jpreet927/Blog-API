import { User } from "./User";

export type Post = {
    _id: string;
    title: string;
    content: string;
    author: string;
    image: string;
    datetime: string;
    published: boolean;
};

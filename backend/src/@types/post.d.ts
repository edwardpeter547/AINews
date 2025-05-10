
interface PostBase {
    title: string;
    content: string;
    authorId: number;
}

export interface PostRequest extends PostBase {
    coverImage?: string;
    thumbnail?: string;
}
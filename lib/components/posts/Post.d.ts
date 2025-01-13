import { FC } from 'react';
export type PostProps = {
    profilePicture?: string;
    fullName: string;
    text: string;
};
export declare const Post: FC<PostProps>;
export default Post;

import { FC } from 'react';
import { CardContainerProps } from '../CardContainer/CardContainer';
export type PostProps = {
    profilePicture?: string;
    fullName: string;
    text: string;
    sx: CardContainerProps['sx'];
};
export declare const Post: FC<PostProps>;
export default Post;

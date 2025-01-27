import { FC } from 'react';
import { CardContainerProps } from '../CardContainer/CardContainer';
export type PostProps = {
    profilePicture?: string;
    fullName: string;
    body: string;
    publicationDatetime: string;
    sx?: CardContainerProps['sx'];
    actions?: {
        onEdit: () => void;
        onDelete: () => void;
    };
};
export declare const Post: FC<PostProps>;
export default Post;

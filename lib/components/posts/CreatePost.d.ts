import { FC } from 'react';
import { CardContainerProps } from '../CardContainer/CardContainer';
import { SubmitHandler } from 'react-hook-form';
type FieldValues = {
    body: string;
};
export type CreatePostProps = {
    profilePicture?: string;
    fullName: string;
    handlePost: SubmitHandler<FieldValues>;
    sx?: CardContainerProps['sx'];
    existingPost?: FieldValues;
    onCancel?: () => void;
};
export declare const CreatePost: FC<CreatePostProps>;
export default CreatePost;

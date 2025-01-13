import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
export type FieldValues = {
    text: string;
};
export type CreatePostProps = {
    profilePicture?: string;
    fullName: string;
    handlePost: SubmitHandler<FieldValues>;
};
export declare const CreatePost: FC<CreatePostProps>;
export default CreatePost;

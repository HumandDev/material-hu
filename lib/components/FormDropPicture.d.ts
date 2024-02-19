import { FC } from 'react';
import { ErrorCode } from 'react-dropzone';
export type FormDropPictureProps = {
    name: string;
    rules?: any;
    maxSize: number;
    recommendedWidth: number;
    recommendedHeight: number;
    getErrorMessage?: (errorCode: ErrorCode) => string;
    altLabel?: string;
    deleteLabel?: string;
    helpTextLabel?: string;
    linkLabel?: string;
    label?: string;
    accept?: Record<string, string[]>;
};
export declare const FormDropPicture: FC<FormDropPictureProps>;
export default FormDropPicture;

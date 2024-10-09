import { FC } from 'react';
import { FileCardProps } from '../FileCard/FileCard';
export type UploaderProps = {
    helperText?: string;
    label?: string;
    uploads?: FileCardProps[];
};
declare const Uploader: FC<UploaderProps>;
export default Uploader;

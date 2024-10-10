import { FormControlProps } from '@mui/material';
import { FC } from 'react';
import { DropzoneProps } from 'react-dropzone';
import { FileCardType } from '../FileCard/FileCard';
export type UploaderProps = {
    helperText?: string;
    label?: string;
    value?: FileCardType[];
    onChange: (files: FileCardType[]) => void;
    fileSizeLimit?: number;
    uploadFunction: (file: File) => Promise<FileCardType>;
    onDropAccepted?: (files: File[]) => void;
    onFilesUploaded?: (files: FileCardType[]) => void;
    error?: boolean;
    sx?: FormControlProps['sx'];
} & Pick<DropzoneProps, 'onDropRejected'>;
declare const Uploader: FC<UploaderProps>;
export default Uploader;

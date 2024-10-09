import { FC } from 'react';
import { CardContainerProps } from '../CardContainer';
export type FileCardProps = {
    status: 'uploading' | 'success' | 'error';
    name: string;
    size: number;
    format: string;
    sx?: CardContainerProps['sx'];
};
declare const FileCard: FC<FileCardProps>;
export default FileCard;

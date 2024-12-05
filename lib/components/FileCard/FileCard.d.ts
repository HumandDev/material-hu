import { FC } from 'react';
import { CardContainerProps } from '../CardContainer/CardContainer';
export type FileCardType = {
    status: 'uploading' | 'success' | 'error';
    file: File;
};
export type FileCardProps = FileCardType & {
    sx?: CardContainerProps['sx'];
    onRemove: () => void;
    onReupload: () => void;
};
declare const FileCard: FC<FileCardProps>;
export default FileCard;

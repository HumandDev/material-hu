import { FC, MouseEvent } from 'react';
export type DocumentItemProps = {
    name?: string;
    size?: string;
    url?: string;
    openLabel?: string;
    deleteLabel?: string;
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
};
export declare const DocumentItem: FC<DocumentItemProps>;
export default DocumentItem;

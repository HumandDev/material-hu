import { FC, MouseEvent } from 'react';
export declare enum DocumentItemTypes {
    PDF = "pdf",
    FILE = "file"
}
export type DocumentItemProps = {
    name?: string;
    size?: string;
    url?: string;
    openLabel?: string;
    deleteLabel?: string;
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: DocumentItemTypes;
};
export declare const DocumentItem: FC<DocumentItemProps>;
export default DocumentItem;

import { FC } from 'react';
import { IconDotsVertical } from '@tabler/icons-react';
type Props = {
    Icon?: typeof IconDotsVertical;
    options: {
        Icon?: any;
        title: string;
        description?: string;
        onClick: () => void;
    }[];
};
export declare const MenuList: FC<Props>;
export {};

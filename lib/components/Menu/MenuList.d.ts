import { FC, ReactElement } from 'react';
import { IconDotsVertical } from '@tabler/icons-react';
type Props = {
    Icon?: typeof IconDotsVertical;
    options: {
        Icon?: any;
        title: string;
        description?: string;
        onClick: () => void;
        disabled?: boolean;
    }[];
    customButton?: ReactElement;
    disableMenu?: boolean;
};
export declare const MenuList: FC<Props>;
export default MenuList;

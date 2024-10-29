import { FC, ReactNode } from 'react';
import { AccordionProps as MuiAccordionProps } from '@mui/material';
import { AvatarProps } from '../Avatar/Avatar';
import { PillsProps } from '../Pills/Pills';
export type AccordionProps = Partial<MuiAccordionProps> & {
    title: string;
    avatar?: AvatarProps;
    caption?: string;
    description?: string;
    pill?: PillsProps;
    customDetail?: ReactNode;
    textDetail?: {
        description: string;
        link: string;
        label: string;
    };
};
declare const Accordion: FC<AccordionProps>;
export default Accordion;

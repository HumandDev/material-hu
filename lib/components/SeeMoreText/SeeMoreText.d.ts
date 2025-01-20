import { FC } from 'react';
import { ButtonProps, TypographyProps } from '@mui/material';
export type ShowMoreTextProps = {
    seeMoreText?: string;
    seeLessText?: string;
    lines?: number;
    isHtmlText?: boolean;
    text: string;
    buttonSx?: ButtonProps['sx'];
    typographyProps?: TypographyProps;
};
export declare const ShowMoreText: FC<ShowMoreTextProps>;
export default ShowMoreText;

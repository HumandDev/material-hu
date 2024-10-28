import { StackProps } from '@mui/material';
type TitleVariant = 'XL' | 'L' | 'M' | 'S';
export type TitleProps = {
    copetin?: string;
    copetinTooltip?: string;
    description?: string;
    descriptionTooltip?: string;
    title: string;
    centered?: boolean;
    variant: TitleVariant;
    sx?: StackProps['sx'];
};
export declare const Title: ({ centered, copetin, copetinTooltip, description, descriptionTooltip, title, variant, sx, }: TitleProps) => import("react/jsx-runtime").JSX.Element;
export default Title;

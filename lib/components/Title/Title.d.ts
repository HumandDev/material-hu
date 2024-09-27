import { StackProps } from '@mui/material';
type TitleVariant = 'XL' | 'L' | 'M' | 'S';
type Props = {
    copetin?: string;
    description?: string;
    title: string;
    centered?: boolean;
    variant: TitleVariant;
    sx?: StackProps['sx'];
};
declare const Title: ({ centered, copetin, description, title, variant, sx, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Title;

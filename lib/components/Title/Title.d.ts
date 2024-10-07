import { StackProps } from '@mui/material';
type TitleVariant = 'XL' | 'L' | 'M' | 'S';
type Props = {
    copetin?: string;
    copetinTooltip?: string;
    description?: string;
    descriptionTooltip?: string;
    title: string;
    centered?: boolean;
    variant: TitleVariant;
    sx?: StackProps['sx'];
};
declare const Title: ({ centered, copetin, copetinTooltip, description, descriptionTooltip, title, variant, sx, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Title;

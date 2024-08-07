import { SxProps } from '@mui/material';
type TitleVariant = 'globalXXS' | 'globalXS' | 'globalS' | 'globalM' | 'globalL' | 'globalXL' | 'globalXXL';
type Props = {
    copetin?: string;
    description?: string;
    title: string;
    centered?: boolean;
    variant: TitleVariant;
    sx?: SxProps;
};
declare const Title: ({ centered, copetin, description, title, variant, sx, }: Props) => import("react/jsx-runtime").JSX.Element;
export default Title;

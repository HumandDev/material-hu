import { Theme } from '@mui/material';
declare const customShadow: {
    outlinedFocusedVisible: string;
    containedFocusedVisible: string;
};
declare const commonButtonRootStyle: (theme: Theme) => {
    [x: string]: string | number | {
        boxShadow: string;
        svg?: undefined;
        color?: undefined;
    } | {
        svg: {
            stroke: string | undefined;
        };
        color: string | undefined;
        boxShadow?: undefined;
    };
    fontFamily: string;
    fontSize: number;
    lineHeight: string;
    fontWeight: number;
    letterSpacing: number;
    color: string;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    '&:hover': {
        boxShadow: string;
    };
};
declare const primaryVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string | undefined;
        backgroundColor?: undefined;
        boxShadow?: undefined;
        color?: undefined;
    } | {
        backgroundColor: string | undefined;
        stroke?: undefined;
        boxShadow?: undefined;
        color?: undefined;
    } | {
        backgroundColor: string | undefined;
        boxShadow: string;
        stroke?: undefined;
        color?: undefined;
    } | {
        color: string | undefined;
        backgroundColor: string | undefined;
        stroke?: undefined;
        boxShadow?: undefined;
    } | undefined;
    color: string | undefined;
    backgroundColor: string | undefined;
    svg: {
        stroke: string | undefined;
    };
    '&:hover': {
        backgroundColor: string | undefined;
    };
};
declare const secondaryVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string | undefined;
        backgroundColor?: undefined;
        borderColor?: undefined;
        boxShadow?: undefined;
        color?: undefined;
    } | {
        backgroundColor: string | undefined;
        borderColor: string | undefined;
        stroke?: undefined;
        boxShadow?: undefined;
        color?: undefined;
    } | {
        boxShadow: string;
        backgroundColor: string | undefined;
        stroke?: undefined;
        borderColor?: undefined;
        color?: undefined;
    } | {
        color: string | undefined;
        backgroundColor: string | undefined;
        borderColor: string | undefined;
        stroke?: undefined;
        boxShadow?: undefined;
    } | undefined;
    border: string;
    color: string | undefined;
    borderColor: string | undefined;
    backgroundColor: string | undefined;
    svg: {
        stroke: string | undefined;
    };
    '&:hover': {
        backgroundColor: string | undefined;
        borderColor: string | undefined;
    };
};
declare const tertiaryVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        backgroundColor: string | undefined;
        boxShadow?: undefined;
    } | {
        boxShadow: string;
        backgroundColor: string | undefined;
    } | undefined;
    color: string | undefined;
    '&:hover': {
        backgroundColor: string | undefined;
    };
};
declare const buttonVariants: (theme: Theme) => ({
    props: {
        variant: string;
    };
    style: {
        [x: string]: string | {
            stroke: string | undefined;
            backgroundColor?: undefined;
            boxShadow?: undefined;
            color?: undefined;
        } | {
            backgroundColor: string | undefined;
            stroke?: undefined;
            boxShadow?: undefined;
            color?: undefined;
        } | {
            backgroundColor: string | undefined;
            boxShadow: string;
            stroke?: undefined;
            color?: undefined;
        } | {
            color: string | undefined;
            backgroundColor: string | undefined;
            stroke?: undefined;
            boxShadow?: undefined;
        } | undefined;
        color: string | undefined;
        backgroundColor: string | undefined;
        svg: {
            stroke: string | undefined;
        };
        '&:hover': {
            backgroundColor: string | undefined;
        };
    };
} | {
    props: {
        variant: string;
    };
    style: {
        [x: string]: string | {
            backgroundColor: string | undefined;
            boxShadow?: undefined;
        } | {
            boxShadow: string;
            backgroundColor: string | undefined;
        } | undefined;
        color: string | undefined;
        '&:hover': {
            backgroundColor: string | undefined;
        };
    };
})[];
export { buttonVariants, commonButtonRootStyle, customShadow, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, };

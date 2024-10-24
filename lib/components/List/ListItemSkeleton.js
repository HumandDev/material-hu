import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, useTheme } from '@mui/material';
import Skeleton from '../Skeleton/Skeleton';
export const ListItemSkeleton = () => {
    const theme = useTheme();
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            gap: 0.5,
            p: 2,
        }, children: [_jsx(Skeleton, { variant: "circular", width: 40, height: 40 }), _jsxs(Stack, { sx: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    gap: 0.5,
                    width: `calc(100% - 40px - ${theme.spacing(0.5)} - 2 * ${theme.spacing(2)})`,
                }, children: [_jsx(Skeleton, { width: "100%", height: "24px" }), _jsx(Skeleton, { width: "14%", height: "12px" })] })] }));
};
export default ListItemSkeleton;

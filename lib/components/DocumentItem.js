import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Link, Stack, Tooltip, IconButton, useTheme, colors, } from '@mui/material';
import { Close, PictureAsPdfOutlined, } from '@mui/icons-material';
export const DocumentItem = (props) => {
    const { name, size, url, openLabel, deleteLabel, onDelete, } = props;
    const theme = useTheme();
    return (_jsxs(Stack, { sx: {
            gap: 2,
            flexDirection: 'row',
            aligItems: 'center',
            py: 1.5,
            px: 2,
            borderRadius: theme.spacing(1),
            backgroundColor: colors.grey[100],
        }, children: [_jsx(PictureAsPdfOutlined, { color: "primary", sx: {
                    width: theme.spacing(5),
                    height: theme.spacing(5),
                } }), _jsxs(Stack, { sx: {
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                }, children: [!!name && (_jsx(Stack, { children: _jsx(Typography, { variant: "subtitle2", children: name }) })), _jsxs(Stack, { component: Typography, variant: "body2", sx: {
                            gap: 0.5,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }, children: [!!size && (_jsx("span", { children: size })), !!size && !!url && (_jsx("span", { children: "•" })), !!url && (_jsx(Link, { href: url, color: "primary", underline: "none", target: "_blank", rel: "noreferrer", children: openLabel }))] })] }), onDelete && deleteLabel && (_jsx(Tooltip, { title: deleteLabel, children: _jsx(IconButton, { onClick: onDelete, "aria-label": deleteLabel, children: _jsx(Close, { fontSize: "small" }) }) }))] }));
};
export default DocumentItem;

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Stack, Tooltip, IconButton, Button, useTheme, colors, } from '@mui/material';
import { Close, PictureAsPdfOutlined } from '@mui/icons-material';
import { openFile } from '../utils/files';
export const DocumentItem = props => {
    const { name, size, url, openLabel, deleteLabel, onDelete } = props;
    const theme = useTheme();
    const handleOpen = () => __awaiter(void 0, void 0, void 0, function* () {
        if (!url)
            return;
        const blob = yield fetch(url).then(r => r.blob());
        openFile(blob);
    });
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
                        }, children: [!!size && _jsx("span", { children: size }), !!size && !!url && _jsx("span", { children: '•' }), !!url && (_jsx(Button, { onClick: handleOpen, color: "primary", variant: "text", size: "small", sx: {
                                    p: 0,
                                    m: 0,
                                }, children: openLabel }))] })] }), onDelete && deleteLabel && (_jsx(Tooltip, { title: deleteLabel, children: _jsx(IconButton, { onClick: onDelete, "aria-label": deleteLabel, children: _jsx(Close, { fontSize: "small" }) }) }))] }));
};
export default DocumentItem;

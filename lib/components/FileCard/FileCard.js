import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LinearProgress, Stack, useTheme } from '@mui/material';
import { IconX, IconCheck, IconFile, IconAlertTriangle, IconTrash, IconDownload, } from '@tabler/icons-react';
import Title from '../Title/Title';
import Avatar from '../Avatar/Avatar';
import CardContainer from '../CardContainer';
const FileCard = ({ status, name, size, format, sx }) => {
    var _a, _b, _c;
    const theme = useTheme();
    let Icon = null;
    let iconColor = 'primary';
    let description = '';
    let descriptionColor = null;
    let RemoveIcon = IconTrash;
    let ExtraIcon = null;
    let backgroundColor = null;
    let borderColor = null;
    switch (status) {
        case 'success':
            Icon = IconCheck;
            description = `${size} mb • ${format}`;
            ExtraIcon = IconDownload;
            break;
        case 'uploading':
            Icon = IconFile;
            description = `${size} mb • Cargando...`;
            RemoveIcon = IconX;
            break;
        case 'error':
            Icon = IconAlertTriangle;
            iconColor = 'error';
            backgroundColor = (_a = theme.palette.hugoBackground) === null || _a === void 0 ? void 0 : _a.errorBg;
            borderColor = (_b = theme.palette.graphics) === null || _b === void 0 ? void 0 : _b.errorText;
            description = 'Error de carga';
            descriptionColor = (_c = theme.palette.textColors) === null || _c === void 0 ? void 0 : _c.errorText;
            break;
    }
    return (_jsxs(CardContainer, { sx: Object.assign({ backgroundColor, borderColor }, sx), children: [_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    gap: 1,
                    alignItems: 'center',
                }, children: [_jsx(Avatar, { color: iconColor, size: "medium", Icon: Icon }), _jsx(Title, { variant: "S", title: name, description: description, sx: {
                            flex: 1,
                            '.MuiTypography-globalXS': {
                                color: descriptionColor,
                            },
                        } }), _jsx(RemoveIcon, { size: 24 }), ExtraIcon && _jsx(ExtraIcon, { size: 24 })] }), status === 'uploading' && (_jsx(LinearProgress, { sx: { mt: 2, borderRadius: 1 }, variant: "indeterminate" }))] }));
};
export default FileCard;

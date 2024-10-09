import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack, Typography, Button } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import CustomHelperText from '../Input/CustomHelperText';
import Title from '../Title/Title';
import FileCard from '../FileCard/FileCard';
import { useTranslation } from './i18n';
const Uploader = ({ helperText, label, uploads = [] }) => {
    const { t } = useTranslation();
    return (_jsxs(Stack, { children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                    color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralText; },
                    mb: 1,
                }, children: label }), _jsxs(Stack, { sx: {
                    borderStyle: 'dashed',
                    borderColor: theme => { var _a; return (_a = theme.palette.border) === null || _a === void 0 ? void 0 : _a.neutralBorder; },
                    py: 3,
                    alignItems: 'center',
                    gap: 1,
                    borderRadius: 2,
                }, children: [_jsx(Title, { centered: true, variant: "S", title: t('TITLE'), description: "Formatos permitidos: PDF, JPG o PNG hasta 50mb" }), _jsx(Button, { variant: "outlined", size: "small", endIcon: _jsx(IconUpload, { size: 16 }), children: "Subir archivo" })] }), !!(uploads === null || uploads === void 0 ? void 0 : uploads.length) && (_jsx(CustomHelperText, { value: "", helperText: helperText })), uploads === null || uploads === void 0 ? void 0 : uploads.map(u => (_jsx(FileCard, Object.assign({ sx: { width: '100%', mt: 1 } }, u), u.name)))] }));
};
export default Uploader;

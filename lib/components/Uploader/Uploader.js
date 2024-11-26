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
import { Button, FormControl, Stack, Typography, } from '@mui/material';
import { IconUpload } from '@tabler/icons-react';
import _ from 'lodash';
import { useDropzone } from 'react-dropzone';
import { bytesToSize, megabytesToBytes } from '../../utils/bytes';
import FileCard from '../FileCard/FileCard';
import CustomHelperText from '../Input/CustomHelperText';
import Title from '../Title/Title';
import { useTranslation } from './i18n';
const Uploader = ({ helperText, label, value = [], fileSizeLimit = megabytesToBytes(50), onDropRejected, onDropAccepted, uploadFunction, onChange, error, sx, }) => {
    const { t } = useTranslation();
    const handleDropAccepted = (files) => __awaiter(void 0, void 0, void 0, function* () {
        onDropAccepted === null || onDropAccepted === void 0 ? void 0 : onDropAccepted(files);
        const fileCards = yield Promise.all(files.map(uploadFunction));
        onChange(fileCards);
    });
    const { getRootProps, getInputProps } = useDropzone({
        onDropAccepted: handleDropAccepted,
        onDropRejected,
        accept: {
            'image/*': ['.jpg', '.png'],
            'application/pdf': ['.pdf'],
        },
        maxFiles: 10,
        multiple: true,
        maxSize: fileSizeLimit,
    });
    return (_jsx(FormControl, { error: error, sx: sx, children: _jsxs(Stack, { children: [_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                        color: theme => { var _a; return (_a = theme.palette.textColors) === null || _a === void 0 ? void 0 : _a.neutralText; },
                        mb: 1,
                    }, children: label }), _jsxs(Stack, Object.assign({ sx: {
                        borderStyle: 'dashed',
                        borderColor: theme => { var _a; return (_a = theme.palette.border) === null || _a === void 0 ? void 0 : _a.neutralBorder; },
                        py: 3,
                        alignItems: 'center',
                        gap: 1,
                        borderRadius: 2,
                    } }, getRootProps(), { children: [_jsx("input", Object.assign({}, getInputProps())), _jsx(Title, { centered: true, variant: "S", title: t('TITLE'), description: t('ALLOWED_FORMATS', {
                                fileSizeLimit: bytesToSize(fileSizeLimit),
                            }) }), _jsx(Button, { variant: "outlined", size: "small", endIcon: _jsx(IconUpload, { size: 16 }), children: t('UPLOAD_FILE') })] })), (error || !value.length) && (_jsx(CustomHelperText, { value: "", helperText: helperText })), value === null || value === void 0 ? void 0 : value.map(u => (_jsx(FileCard, Object.assign({ sx: { width: '100%', mt: 1 }, onRemove: () => onChange(_.without(value, u)), onReupload: () => handleDropAccepted([u.file]) }, u), u.file.name)))] }) }));
};
export default Uploader;

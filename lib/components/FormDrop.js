import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, Typography, Link, Stack, Button, Box, useTheme, alpha, } from '@mui/material';
import { Upload } from '@mui/icons-material';
import { useModal } from '../hooks/useModal';
import { CroppingModal } from './CroppingModal';
import { DocumentItem, DocumentItemTypes } from './DocumentItem';
import { megabytesToBytes } from '../utils/bytes';
export var FormDropTypes;
(function (FormDropTypes) {
    FormDropTypes["IMAGE"] = "image";
    FormDropTypes["VIDEO"] = "video";
    FormDropTypes["PDF"] = "pdf";
    FormDropTypes["FILE"] = "file";
})(FormDropTypes || (FormDropTypes = {}));
const DOCUMENT_TYPES = [FormDropTypes.PDF, FormDropTypes.FILE];
const ACCEPT_BY_TYPE = {
    [FormDropTypes.IMAGE]: { 'image/png': [], 'image/jpeg': [] },
    [FormDropTypes.VIDEO]: { 'video/mp4': [] },
    [FormDropTypes.PDF]: { 'application/pdf': [] },
    [FormDropTypes.FILE]: { '*': [] },
};
const MAX_SIZE_BY_TYPE = {
    [FormDropTypes.IMAGE]: megabytesToBytes(100),
    [FormDropTypes.VIDEO]: megabytesToBytes(150),
    [FormDropTypes.PDF]: megabytesToBytes(100),
    [FormDropTypes.FILE]: megabytesToBytes(100),
};
const RECOMMENDED_WIDTH = 900;
const RECOMMENDED_HEIGHT = 400;
export const FormDrop = props => {
    var _a, _b;
    const { name, rules, maxSize: maxSizeProp, recommendedWidth = RECOMMENDED_WIDTH, recommendedHeight = RECOMMENDED_HEIGHT, getErrorMessage = () => '', altLabel = () => '', deleteLabel = () => '', helpTextLabel = () => '', linkLabel = () => '', sizeLabel = () => '', openLabel = () => '', label = () => '', accept: acceptProp, type = FormDropTypes.IMAGE, onDrop = () => null, withCrop, cancelLabel, saveLabel, cropLabel, sliderLabel, attachmentFormatEnabled = false, } = props;
    const theme = useTheme();
    const accept = acceptProp || ACCEPT_BY_TYPE[type];
    const maxSize = maxSizeProp || MAX_SIZE_BY_TYPE[type];
    const { control, trigger, setError, getFieldState } = useFormContext();
    const errorMessage = (_b = (_a = getFieldState(name)) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: ({ field: { onChange, value } }) => {
            var _a;
            const dropValue = value;
            const context = {
                maxSize,
                recommendedHeight,
                recommendedWidth,
                type,
                value,
            };
            const handleSaveCropping = (file) => {
                onChange({ file, url: null, attachment: null });
                trigger(name);
            };
            const { modal: croppingModal, showModal: showCroppingModal } = useModal(CroppingModal, {
                fullWidth: true,
                maxWidth: 'md',
            }, {
                onSave: handleSaveCropping,
                recommendedWidth,
                recommendedHeight,
                title: cropLabel,
                cancelLabel,
                saveLabel,
                sliderLabel,
            });
            const handleDrop = (files) => {
                if (!files[0])
                    return;
                if (type === FormDropTypes.IMAGE && withCrop) {
                    showCroppingModal({ file: files[0] });
                    return;
                }
                onDrop({ file: files[0], url: null, attachment: null });
                onChange({ file: files[0], url: null, attachment: null });
                trigger(name);
            };
            const handleDelete = () => {
                onChange(null);
                trigger(name);
            };
            const handleError = (fileRejections) => {
                var _a, _b;
                if (!(fileRejections === null || fileRejections === void 0 ? void 0 : fileRejections.length) && !((_b = (_a = fileRejections[0]) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length))
                    return;
                setError(name, {
                    type: 'custom',
                    message: getErrorMessage(fileRejections[0].errors[0].code, context),
                });
            };
            const { getRootProps, getInputProps, isDragActive } = useDropzone({
                onDrop: handleDrop,
                onDropRejected: handleError,
                accept,
                maxFiles: 1,
                multiple: false,
                maxSize,
            });
            const hasValue = attachmentFormatEnabled
                ? !!(dropValue === null || dropValue === void 0 ? void 0 : dropValue.file) ||
                    (!!(dropValue === null || dropValue === void 0 ? void 0 : dropValue.attachment) && !!dropValue.attachment.url)
                : !!(dropValue === null || dropValue === void 0 ? void 0 : dropValue.file) || !!(dropValue === null || dropValue === void 0 ? void 0 : dropValue.url);
            const src = useMemo(() => {
                if (!dropValue)
                    return undefined;
                if (attachmentFormatEnabled) {
                    const { attachment, file } = dropValue;
                    return (attachment === null || attachment === void 0 ? void 0 : attachment.url) || (file && URL.createObjectURL(file));
                }
                else {
                    const { url, file } = dropValue;
                    return url || (file && URL.createObjectURL(file));
                }
            }, [hasValue, attachmentFormatEnabled]);
            return (_jsxs(Stack, { spacing: 3, width: "100%", children: [type === FormDropTypes.IMAGE && withCrop && croppingModal, hasValue && !DOCUMENT_TYPES.includes(type) && (_jsxs(_Fragment, { children: [_jsx(Box, { component: type === FormDropTypes.IMAGE ? 'img' : 'video', src: src, alt: altLabel(context), controls: true, sx: {
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: `${recommendedWidth}/${recommendedHeight}`,
                                    display: 'block',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                } }), _jsx(Button, { onClick: handleDelete, sx: { width: 'fit-content' }, children: deleteLabel(context) })] })), hasValue && DOCUMENT_TYPES.includes(type) && (_jsx(Stack, { sx: {
                            gap: 1,
                        }, children: _jsx(DocumentItem, { name: ((_a = value.file) === null || _a === void 0 ? void 0 : _a.name) || '', size: sizeLabel(context), url: src, openLabel: openLabel(context), deleteLabel: deleteLabel(context), onDelete: handleDelete, type: type === FormDropTypes.PDF
                                ? DocumentItemTypes.PDF
                                : DocumentItemTypes.FILE }) })), !hasValue && (_jsxs(_Fragment, { children: [_jsxs(Box, Object.assign({ "aria-describedby": "drop-picture-error-text", sx: {
                                    borderWidth: '1px',
                                    borderRadius: '20px',
                                    borderColor: theme.palette.divider,
                                    borderStyle: 'dashed',
                                    height: '162px',
                                    width: '100%',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: isDragActive
                                        ? alpha(theme.palette.action.active, 0.05)
                                        : 'transparent',
                                    '&:hover': {
                                        backgroundColor: alpha(theme.palette.action.active, 0.05),
                                    },
                                } }, getRootProps(), { children: [_jsx("input", Object.assign({}, getInputProps())), _jsx(Box, { sx: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '64px',
                                            width: '64px',
                                            borderRadius: '64px',
                                            backgroundColor: '#e5e7eb',
                                            marginRight: theme.spacing(2),
                                            '& .MuiSvgIcon-root': {
                                                width: '40px',
                                                height: '40px',
                                                color: theme.palette.action.active,
                                            },
                                        }, children: _jsx(Upload, {}) }), _jsxs(Stack, { spacing: 1, children: [_jsxs(Typography, { variant: "h6", component: "span", children: [_jsx(Link, { color: "primary", children: linkLabel(context) }), label(context)] }), _jsx(Typography, { variant: "body2", component: "span", color: "textSecondary", children: helpTextLabel(context) })] })] })), !!errorMessage && (_jsx(FormHelperText, { error: true, id: "drop-picture-error-text", children: errorMessage }))] }))] }));
        } }));
};
export default FormDrop;

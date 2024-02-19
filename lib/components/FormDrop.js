import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useDropzone, } from 'react-dropzone';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, Typography, Link, Stack, Button, Box, useTheme, alpha, } from '@mui/material';
import { Upload } from '@mui/icons-material';
import { megabytesToBytes } from '../utils/bytes';
export var FormDropTypes;
(function (FormDropTypes) {
    FormDropTypes["IMAGE"] = "image";
    FormDropTypes["VIDEO"] = "video";
})(FormDropTypes || (FormDropTypes = {}));
;
const ACCEPT_BY_TYPE = {
    [FormDropTypes.IMAGE]: { 'image/png': [], 'image/jpeg': [] },
    [FormDropTypes.VIDEO]: { 'video/mp4': [] },
};
const MAX_SIZE_BY_TYPE = {
    [FormDropTypes.IMAGE]: megabytesToBytes(100),
    [FormDropTypes.VIDEO]: megabytesToBytes(150),
};
const RECOMMENDED_WIDTH = 900;
const RECOMMENDED_HEIGHT = 400;
export const FormDrop = (props) => {
    var _a, _b;
    const { name, rules, maxSize: maxSizeProp, recommendedWidth = RECOMMENDED_WIDTH, recommendedHeight = RECOMMENDED_HEIGHT, getErrorMessage = () => '', altLabel = () => '', deleteLabel = () => '', helpTextLabel = () => '', linkLabel = () => '', label = () => '', accept: acceptProp, type = FormDropTypes.IMAGE, } = props;
    const theme = useTheme();
    const accept = acceptProp || ACCEPT_BY_TYPE[type];
    const maxSize = maxSizeProp || MAX_SIZE_BY_TYPE[type];
    const { control, trigger, setError, getFieldState, } = useFormContext();
    const errorMessage = (_b = (_a = getFieldState(name)) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message;
    return (_jsx(Controller, { name: name, control: control, rules: rules, render: ({ field: { onChange, value } }) => {
            var _a;
            const context = {
                maxSize,
                recommendedHeight,
                recommendedWidth,
                type,
            };
            const handleDrop = (files) => {
                if (!files[0])
                    return;
                onChange({ file: files[0], url: null });
                trigger(name);
            };
            const handleDelete = () => {
                onChange(null);
                trigger(name);
            };
            const handleError = (fileRejections) => {
                var _a, _b;
                if (!(fileRejections === null || fileRejections === void 0 ? void 0 : fileRejections.length)
                    && !((_b = (_a = fileRejections[0]) === null || _a === void 0 ? void 0 : _a.errors) === null || _b === void 0 ? void 0 : _b.length))
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
            const hasValue = ((_a = value === null || value === void 0 ? void 0 : value.url) === null || _a === void 0 ? void 0 : _a.length) > 0 || !!(value === null || value === void 0 ? void 0 : value.file);
            return (_jsxs(Stack, { spacing: 3, width: "100%", children: [hasValue && (_jsxs(_Fragment, { children: [_jsx(Box, { component: type === FormDropTypes.IMAGE ? "img" : "video", src: value.url || URL.createObjectURL(value.file), alt: altLabel(context), controls: true, sx: {
                                    width: '100%',
                                    height: 'auto',
                                    aspectRatio: `${recommendedWidth}/${recommendedHeight}`,
                                    display: 'block',
                                    objectFit: 'cover',
                                    borderRadius: '20px',
                                } }), _jsx(Button, { onClick: handleDelete, sx: { width: 'fit-content' }, children: deleteLabel(context) })] })), !hasValue && (_jsxs(_Fragment, { children: [_jsxs(Box, Object.assign({ "aria-describedby": "drop-picture-error-text", sx: {
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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { DialogTitle, DialogContent, DialogActions, Slider, Stack, useTheme, useMediaQuery, } from '@mui/material';
import Button from '@mui/lab/LoadingButton';
import AvatarEditor from 'react-avatar-editor';
import { ZoomOut as ZoomOutIcon, ZoomIn as ZoomInIcon, } from '@mui/icons-material';
export const CroppingModal = props => {
    const { file, onClose, onSave, onChangeSlider = () => null, recommendedWidth, recommendedHeight, title, cancelLabel, saveLabel, sliderLabel, } = props;
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const dimensionIfSmall = isSmallDevice ? 3 : 1.5;
    const dimentionAdjustment = isMobileDevice ? 5 : dimensionIfSmall;
    const adjustedWidth = recommendedWidth / dimentionAdjustment;
    const adjustedHeight = recommendedHeight / dimentionAdjustment;
    const editor = useRef(null);
    const [zoom, setZoom] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleChangeSlider = (event, newValue) => {
        onChangeSlider(event, newValue);
        setZoom(newValue);
    };
    const handleSave = () => __awaiter(void 0, void 0, void 0, function* () {
        setLoading(true);
        if (!(editor === null || editor === void 0 ? void 0 : editor.current))
            return;
        const dataUrl = editor.current
            .getImageScaledToCanvas()
            .toDataURL();
        const result = yield fetch(dataUrl);
        const blob = yield result.blob();
        const newFile = new File([blob], file.name, { type: file.type });
        yield onSave(newFile);
        onClose();
    });
    return (_jsxs(_Fragment, { children: [_jsx(DialogTitle, { children: title }), _jsxs(DialogContent, { children: [_jsx(AvatarEditor, { ref: editor, image: file, width: recommendedWidth, height: recommendedHeight, border: 30, scale: 1 + zoom / 100, style: {
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            width: adjustedWidth,
                            height: adjustedHeight,
                        }, color: [0, 0, 0, 0.7] }), _jsxs(Stack, { direction: "row", alignItems: "center", spacing: 2, children: [_jsx(ZoomOutIcon, {}), _jsx(Slider, { "aria-label": sliderLabel, value: zoom, onChange: handleChangeSlider }), _jsx(ZoomInIcon, {})] })] }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onClose, children: cancelLabel }), _jsx(Button, { variant: "primary", onClick: handleSave, loading: loading, children: saveLabel })] })] }));
};
export default CroppingModal;

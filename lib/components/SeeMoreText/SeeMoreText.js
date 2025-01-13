import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useMemo, useEffect } from 'react';
import { Button, Typography, } from '@mui/material';
import { useTranslation } from './i18n';
import { mapNewLines, isTextClamped } from '../../utils/string';
export const ShowMoreText = props => {
    const { seeMoreText, seeLessText, lines = 3, isHtmlText = false, text, buttonSx, typographyProps, } = props;
    const [show, setShow] = useState(false);
    const [isCroped, setIsCroped] = useState(false);
    const textRef = useRef(null);
    const { t } = useTranslation();
    const handleSeeMore = () => {
        setShow(true);
    };
    const handleSeeLess = () => {
        setShow(false);
    };
    const formatedText = useMemo(() => mapNewLines(text), [text]);
    useEffect(() => {
        if (textRef.current) {
            setIsCroped(isTextClamped(textRef));
        }
    }, [textRef.current, show]);
    if (lines < 1) {
        return _jsx(Typography, Object.assign({}, typographyProps, { children: formatedText }));
    }
    const renderText = () => {
        const sx = {
            '&.clamp': {
                width: '100%',
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: `${lines}`,
                WebkitBoxFlex: '1',
            },
        };
        return (_jsx(Typography, Object.assign({ ref: textRef }, typographyProps, { sx: Object.assign({ sx }, typographyProps === null || typographyProps === void 0 ? void 0 : typographyProps.sx) }, (isHtmlText ? { __html: text } : { children: formatedText }))));
    };
    return (_jsxs(_Fragment, { children: [renderText(), show && (_jsx(Button, { sx: buttonSx, onClick: handleSeeLess, children: seeLessText || t('SEE_LESS') })), !show && isCroped && (_jsx(Button, { sx: buttonSx, onClick: handleSeeMore, children: seeMoreText || t('SEE_MORE') }))] }));
};
export default ShowMoreText;

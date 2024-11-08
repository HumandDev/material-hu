var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion as MuiAccordion, AccordionSummary as MuiAccordionSummary, Stack, Typography, AccordionDetails, Link, useTheme, } from '@mui/material';
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react';
import Avatar from '../Avatar/Avatar';
import Pills from '../Pills/Pills';
const Accordion = (_a) => {
    var { title, caption = '', description = '', avatar = null, pill, textDetail = null, customDetail = null } = _a, accordionProps = __rest(_a, ["title", "caption", "description", "avatar", "pill", "textDetail", "customDetail"]);
    const theme = useTheme();
    return (_jsxs(MuiAccordion, Object.assign({ sx: {
            borderRadius: '8px',
            '&:before': {
                backgroundColor: 'transparent',
            },
            mb: 2,
        } }, accordionProps, { children: [_jsx(MuiAccordionSummary, { sx: {
                    p: 2,
                    m: 0,
                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                    },
                }, expandIcon: _jsx(IconChevronDown, {}), children: _jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        mr: 2,
                    }, children: [_jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                gap: 1,
                                width: 'inherit',
                                alignItems: 'inherit',
                            }, children: [avatar && (_jsx(Avatar, { src: avatar.src, alt: avatar.alt })), _jsxs(Stack, { children: [caption && (_jsx(Typography, { variant: "globalXXS", fontWeight: "regular", children: caption })), _jsx(Typography, { variant: "globalS", fontWeight: "semiBold", children: title }), description && (_jsx(Typography, { variant: "globalXS", fontWeight: "regular", children: description }))] })] }), pill && (_jsx(Pills, Object.assign({ sx: { alignSelf: 'flex-end' } }, pill)))] }) }), _jsx(AccordionDetails, { sx: {
                    p: 0,
                    pl: '4px',
                }, children: _jsxs(Stack, { children: [!textDetail && _jsx(Stack, { sx: { p: 2 }, children: customDetail }), textDetail && (_jsxs(Stack, { sx: { px: 2, pb: 2, gap: 1 }, children: [_jsx(Typography, { variant: "globalS", fontWeight: "regular", children: textDetail.description }), _jsxs(Link, { sx: {
                                        color: theme.palette.primary.main,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        gap: 0.5,
                                    }, href: textDetail.link, children: [textDetail.label, _jsx(IconArrowRight, { size: "1em", color: theme.palette.primary.main })] })] }))] }) })] })));
};
export default Accordion;

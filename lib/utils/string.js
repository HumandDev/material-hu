import { jsx as _jsx } from "react/jsx-runtime";
export const isTextClamped = (textRef) => {
    if (!(textRef === null || textRef === void 0 ? void 0 : textRef.current))
        return false;
    const element = textRef.current;
    return element.scrollHeight > element.clientHeight;
};
export const mapNewLines = (text) => {
    if (!text)
        return [];
    return text.split('\n').map((item, i, arr) => {
        const line = _jsx("span", { children: item }, i);
        if (i === arr.length - 1) {
            return line;
        }
        return [line, _jsx("br", {}, `${i}br`)];
    });
};

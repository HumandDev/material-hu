export const getBorderColor = (theme, focused, error, success) => {
    var _a, _b, _c, _d;
    if (focused) {
        return (_a = theme.palette.base) === null || _a === void 0 ? void 0 : _a.blueBrand[400];
    }
    if (error) {
        return (_b = theme.palette.graphics) === null || _b === void 0 ? void 0 : _b.errorText;
    }
    if (success) {
        return (_c = theme.palette.graphics) === null || _c === void 0 ? void 0 : _c.successText;
    }
    return (_d = theme.palette.border) === null || _d === void 0 ? void 0 : _d.neutralBorder;
};

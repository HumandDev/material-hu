export const getInitials = (fullName) => {
    if (!(fullName === null || fullName === void 0 ? void 0 : fullName.trim()))
        return '';
    return fullName
        .trim()
        .toUpperCase()
        .split(/\s+/)
        .slice(0, 2)
        .map(word => word.charAt(0))
        .join('');
};

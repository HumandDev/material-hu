import DOMPurify from 'dompurify';
export const sanitizeInput = (input, errorMsg) => {
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput !== input)
        return errorMsg;
    return true;
};

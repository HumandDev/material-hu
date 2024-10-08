import DOMPurify from 'dompurify';
export const sanitizeInput = (input, errorMsg) => {
    if (!input || typeof input !== 'string')
        return true;
    const sanitizedInput = DOMPurify.sanitize(input);
    if (sanitizedInput !== input)
        return errorMsg;
    return true;
};

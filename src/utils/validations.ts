import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string, errorMsg: string) => {
  const sanitizedInput = DOMPurify.sanitize(input);
  if (sanitizedInput !== input) return errorMsg;
  return true;
};

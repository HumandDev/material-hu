export const getInitials = (fullName: string) => {
  if (!fullName?.trim()) return '';

  return fullName
    .trim()
    .toUpperCase()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word.charAt(0))
    .join('');
};

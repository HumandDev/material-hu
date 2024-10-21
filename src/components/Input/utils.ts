export const getBorderColor = (
  theme: any,
  focused?: boolean,
  error?: boolean,
  success?: boolean,
) => {
  if (focused) {
    return theme.palette.primary.main;
  }
  if (error) {
    return theme.palette.graphics?.errorText;
  }
  if (success) {
    return theme.palette.graphics?.successText;
  }
  return theme.palette.border?.neutralBorder;
};

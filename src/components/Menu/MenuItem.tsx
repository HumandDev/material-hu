import {
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  useTheme,
} from '@mui/material';

export type MenuItemProps = Pick<
  MuiMenuItemProps,
  'id' | 'selected' | 'disabled' | 'onClick' | 'sx' | 'children'
>;

export const MenuItem = ({
  id,
  selected,
  disabled,
  onClick,
  sx,
  children,
}: MenuItemProps) => {
  const theme = useTheme();

  return (
    <MuiMenuItem
      id={id}
      selected={selected}
      disabled={disabled}
      onClick={onClick}
      sx={{
        p: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: theme.palette.hugoBackground?.neutralBgSecondary,
        },
        ...sx,
      }}
    >
      {children}
    </MuiMenuItem>
  );
};

export default MenuItem;

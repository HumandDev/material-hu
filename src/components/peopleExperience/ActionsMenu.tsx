import { ReactNode, useId, useState, createContext, useContext } from 'react';
import {
  MenuItemProps,
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
} from '@mui/material';

type RenderTriggerProps = {
  ariaProps: object;
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
};

type MenuProps = {
  children: ReactNode;
  renderTrigger: (props: RenderTriggerProps) => JSX.Element;
  closeOnSelect?: boolean;
};

type MenuContextValue = {
  closeMenu: () => void;
  closeOnSelect?: boolean;
};

const MenuContext = createContext<MenuContextValue>({
  closeOnSelect: false,
  closeMenu: () => {},
});

const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a <PXMenu />');
  }
  return context;
};

export const ActionsMenuItem = (props: MenuItemProps) => {
  const { closeOnSelect, closeMenu } = useMenu();
  const { sx } = props;
  const handleClick = () => {
    if (closeOnSelect) {
      closeMenu();
    }
  };
  return (
    <MuiMenuItem
      onClick={handleClick}
      {...props}
      sx={{ borderRadius: '12px', ...sx }}
    />
  );
};

const ActionsMenu = ({ children, renderTrigger, closeOnSelect }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const id = useId();
  const isOpen = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MenuContext.Provider value={{ closeMenu: handleClose, closeOnSelect }}>
      {renderTrigger({
        ariaProps: {
          id,
          'aria-controls': isOpen ? 'actions-menu' : undefined,
          'aria-haspopup': 'true',
          'aria-expanded': isOpen ? 'true' : undefined,
        },
        handleOpen,
        open: isOpen,
      })}
      <MuiMenu
        id="actions-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': id,
          sx: { p: 0.5 },
        }}
      >
        {children}
      </MuiMenu>
    </MenuContext.Provider>
  );
};

export default ActionsMenu;

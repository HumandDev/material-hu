import { useState, useMemo, FC } from 'react';
import Drawer, { DrawerProps } from '../components/Drawer/Drawer';

function useSidesheet<T>(
  DrawerContentComponent: FC<T>,
  drawerProps?: Partial<DrawerProps> & { whenClose: () => void },
  extraProps?: Partial<T>,
) {
  const [open, setOpen] = useState(false);
  const closeDrawer = () => {
    setOpen(false);
    drawerProps?.whenClose?.();
  };

  const [drawerContentProps, setDrawerContentProps] = useState<Partial<T>>();
  const drawerWidth = 340;
  const containerStyles = useMemo(
    () => ({
      display: 'flex',
      height: '100%',
      marginRight: open ? `${drawerWidth}px` : '0px',
    }),
    [open, drawerWidth],
  );

  return {
    containerStyles,
    drawer: (
      <>
        {open && (
          <div
            onClick={closeDrawer}
            style={{
              top: 0,
              left: 0,
              zIndex: 999,
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              background: 'transparent',
            }}
          />
        )}
        <Drawer
          open={open}
          variant="persistent"
          onClose={closeDrawer}
          PaperProps={{ sx: { width: drawerWidth, mt: 8 } }}
          {...drawerProps}
        >
          <DrawerContentComponent
            onClose={closeDrawer}
            {...(drawerContentProps as T)}
            {...extraProps}
          />
        </Drawer>
      </>
    ),
    closeDrawer,
    showDrawer: (props: Partial<T> = {}) => {
      setDrawerContentProps(props);
      setOpen(true);
    },
  };
}

export { useSidesheet };

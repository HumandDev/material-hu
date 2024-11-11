import { useState, FC } from 'react';
import Drawer, { DrawerProps } from '../components/Drawer/Drawer';

function useDrawer<T>(
  DrawerContentComponent: FC<T>,
  drawerProps?: Partial<DrawerProps>,
  extraProps?: Partial<T>,
) {
  const [open, setOpen] = useState(false);
  const closeDrawer: () => void = () => setOpen(false);
  const [drawerContentProps, setDrawerContentProps] = useState<Partial<T>>();

  return {
    drawer: (
      <Drawer
        open={open}
        onClose={closeDrawer}
        {...drawerProps}
      >
        <DrawerContentComponent
          onClose={closeDrawer}
          {...(drawerContentProps as T)}
          {...extraProps}
        />
      </Drawer>
    ),
    closeDrawer,
    showDrawer: (props: Partial<T> = {}) => {
      setDrawerContentProps(props);
      setOpen(true);
    },
  };
}

export { useDrawer };

import { ReactNode } from 'react';
import {
  Stack,
  colors,
  Typography,
  ListItemText,
  List,
  styled,
  ListItemButton,
} from '@mui/material';
import { Key } from 'react-hook-form/dist/types/path/common';
import { TabPanel, TabPanelItem } from './TabPanel';

const DECO_BORDER_WIDTH = '4px';

const ListItem = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `${DECO_BORDER_WIDTH} solid transparent`,
  transition: 'all 250ms',
  '&.Mui-selected': {
    color: theme.palette.primary.main,
    borderLeftColor: theme.palette.primary.main,
  },
}));

export type Tab = {
  id: Key;
  title: string;
  element: ReactNode;
};

type TabSidebarProps = {
  title: string;
  selectedIndex: number;
  onChangeIndex: (nextIndex: number) => void;
  tabs: Tab[];
};

const TabSidebar = ({
  selectedIndex,
  onChangeIndex,
  tabs,
  title,
}: TabSidebarProps) => {
  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    onChangeIndex(index);
  };

  return (
    <Stack sx={{ flexDirection: 'row', height: '100%' }}>
      <Stack sx={{ gap: 2, py: 4, bgcolor: colors.grey[50], height: '100%' }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            px: theme => `calc(${theme.spacing(2)} + ${DECO_BORDER_WIDTH})`,
          }}
        >
          {title}
        </Typography>
        <List
          component="nav"
          aria-label=""
          sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          disablePadding
        >
          {tabs.map(({ id, title: tabTitle }, index) => (
            <ListItem
              key={id}
              selected={selectedIndex === index}
              onClick={event => handleListItemClick(event, index)}
            >
              <ListItemText
                primary={tabTitle}
                primaryTypographyProps={{ sx: { fontWeight: '500' } }}
              />
            </ListItem>
          ))}
        </List>
      </Stack>
      <Stack sx={{ height: '100%', flex: 1, minWidth: 0, maxWidth: '100%' }}>
        <TabPanel value={selectedIndex}>
          {tabs.map(({ id, element }, index) => (
            <TabPanelItem
              key={id}
              index={index}
              sx={{ flex: 1 }}
            >
              {element}
            </TabPanelItem>
          ))}
        </TabPanel>
      </Stack>
    </Stack>
  );
};

export default TabSidebar;

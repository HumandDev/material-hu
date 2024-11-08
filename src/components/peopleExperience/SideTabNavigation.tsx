import { ComponentType, Fragment, ReactNode } from 'react';
import {
  Stack,
  colors,
  Typography,
  ListItemText,
  List,
  styled,
  ListItemButton,
  StackProps,
} from '@mui/material';
import { Key } from 'react-hook-form/dist/types/path/common';
import { TabPanel, TabPanelItem } from './TabPanel';

const DECO_BORDER_WIDTH = '4px';

const ListItem = styled(ListItemButton)(({ theme }) => ({
  borderLeft: `${DECO_BORDER_WIDTH} solid transparent`,
  paddingLeft: `calc(${theme.spacing(3)} - ${DECO_BORDER_WIDTH})`,
  paddingRight: theme.spacing(3),
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
  layout?: ComponentType<{ children: ReactNode }>;
  slotProps?: Partial<{
    tabs: StackProps;
    layout: { skipFilters?: boolean; skipComparisonFilter?: boolean };
  }>;
};

const SideTabNavigation = ({
  selectedIndex,
  onChangeIndex,
  tabs,
  title,
  layout: Layout = Fragment,
  slotProps,
}: TabSidebarProps) => {
  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    onChangeIndex(index);
  };

  return (
    <Stack sx={{ flexDirection: 'row', height: '100%' }}>
      <Stack
        {...slotProps?.tabs}
        sx={{
          py: 4,
          bgcolor: colors.grey[50],
          height: '100%',
          ...slotProps?.tabs?.sx,
        }}
      >
        <Typography
          variant="h5"
          component="h2"
          sx={{
            px: 3,
            py: 2,
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
        <Layout {...slotProps?.layout}>
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
        </Layout>
      </Stack>
    </Stack>
  );
};

export default SideTabNavigation;

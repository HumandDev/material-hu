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
import { useTranslation } from 'react-i18next';

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
};

type TabSidebarProps = {
  selectedIndex: number;
  onChangeIndex: (nextIndex: number) => void;
  tabs: Tab[];
};

const TabSidebar = ({
  selectedIndex,
  onChangeIndex,
  tabs,
}: TabSidebarProps) => {
  const { t } = useTranslation();

  const handleListItemClick = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    onChangeIndex(index);
  };

  return (
    <Stack sx={{ gap: 2, py: 4, bgcolor: colors.grey[50], height: '100%' }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{ px: theme => `calc(${theme.spacing(2)} + ${DECO_BORDER_WIDTH})` }}
      >
        {t('RESULTS')}
      </Typography>
      <List
        component="nav"
        aria-label=""
        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
        disablePadding
      >
        {tabs.map(({ id, title }, index) => (
          <ListItem
            key={id}
            selected={selectedIndex === index}
            onClick={event => handleListItemClick(event, index)}
          >
            <ListItemText
              primary={title}
              primaryTypographyProps={{ sx: { fontWeight: '500' } }}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default TabSidebar;

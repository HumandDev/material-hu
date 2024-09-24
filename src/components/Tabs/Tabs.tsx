import {
  TabsProps,
  Tabs as MuiTabs,
  Tab,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type Props = Pick<TabsProps, 'sx' | 'defaultValue'> & {
  tabs: {
    label: string;
  }[];
  onTabChange?: (value: string) => void;
};

const Tabs = ({ tabs, sx, onTabChange, defaultValue }: Props) => {
  const [currentTab, setCurrentTab] = useState(
    defaultValue || tabs?.[0]?.label,
  );

  return (
    <Stack>
      <MuiTabs
        sx={{
          '.MuiTabs-indicator': {
            backgroundColor: theme => theme.palette.base?.blueBrand[400],
            borderRadius: '4px 4px 0px 0px',
          },
          ...sx,
        }}
        value={currentTab}
        onChange={(e, v) => {
          onTabChange?.(v);
          setCurrentTab(v);
        }}
      >
        {tabs?.map(tab => (
          <Tab
            key={tab.label}
            label={
              <Typography
                variant="globalXS"
                fontWeight={'fontWeightSemiBold'}
              >
                {tab.label}
              </Typography>
            }
            value={tab.label}
            sx={{
              px: 1,
              minWidth: 0,
              textTransform: 'none',
              color: theme => theme.palette.textColors?.neutralText,
              '&.Mui-selected': {
                color: theme => theme.palette.base?.blueBrand[400],
              },
            }}
          />
        ))}
      </MuiTabs>
      <Divider />
    </Stack>
  );
};

export default Tabs;

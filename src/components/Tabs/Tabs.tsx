import {
  TabsProps,
  Tabs as MuiTabs,
  Tab,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type Props = Pick<TabsProps, 'sx' | 'defaultValue' | 'value'> & {
  tabs: {
    label: string;
    value: string;
  }[];
  onTabChange?: (value: string, index: number) => void;
};

const Tabs = ({ tabs, sx, onTabChange, defaultValue, value }: Props) => {
  const [currentTab, setCurrentTab] = useState(
    defaultValue || tabs?.[0]?.value,
  );

  return (
    <Stack sx={sx}>
      <MuiTabs
        sx={{
          '.MuiTabs-indicator': {
            backgroundColor: theme => theme.palette.base?.blueBrand[400],
            borderRadius: '4px 4px 0px 0px',
          },
        }}
        value={value || currentTab}
        onChange={(e, v) => {
          onTabChange?.(
            v,
            tabs.findIndex(tab => tab.value === v),
          );
          setCurrentTab(v);
        }}
      >
        {tabs?.map(tab => (
          <Tab
            key={tab.value}
            label={
              <Typography
                variant="globalXS"
                fontWeight={'fontWeightSemiBold'}
                sx={{ color: 'inherit' }}
              >
                {tab.label}
              </Typography>
            }
            value={tab.value}
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
      <Divider sx={{ borderBottom: 0 }} />
    </Stack>
  );
};

export default Tabs;

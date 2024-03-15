import { Box, Tab, Tabs, Typography, TabsProps, alpha } from '@mui/material';

export type Tab = {
  label: any;
};

export type RoundedTabsProps = TabsProps & {
  tabs: Tab[];
  tabIndex: number;
  disabled?: boolean;
};

const RoundedTabs = ({
  tabs,
  tabIndex,
  disabled = false,
  ...tabsProps
}: RoundedTabsProps) => (
  <Box
    sx={{
      mt: 2,
      width: '100%',
      border: '1px solid',
      borderColor: disabled ? '#11192761' : 'primary.main',
      borderRadius: '12px',
      height: '37px',
    }}
  >
    <Tabs
      value={tabIndex}
      textColor="primary"
      variant="fullWidth"
      {...tabsProps}
      sx={{
        minHeight: '37px',
        '& .MuiTabs-indicator': {
          width: '500px',
          backgroundColor: 'transparent',
          minHeight: '30px',
          height: '30px',
        },
        ...tabsProps.sx,
      }}
    >
      {tabs.map((tab, index) => (
        <Tab
          label={
            <Typography
              sx={{ fontWeight: 'bold', fontSize: '13px', color: 'primary' }}
            >
              {tab.label}
            </Typography>
          }
          disabled={disabled}
          key={tab.label}
          sx={{
            minHeight: '35px',
            height: '35px',
            borderRight: index === tabs.length - 1 ? 'none' : '1px solid',
            borderRadius: () => {
              if (index === 0) return '12px 0px 0px 12px';
              if (index === tabs.length - 1) return '0px 12px 12px 0px';
              return '0px';
            },
            marginLeft: '0 !important',
            borderColor: disabled ? '#11192761' : 'primary.main',
            bgcolor: theme => {
              if (tabIndex === index) {
                if (disabled) return '#F8F9FA';
                return alpha(theme.palette.primary.main, 0.1);
              }
              return 'transparent';
            },
          }}
        />
      ))}
    </Tabs>
  </Box>
);

export default RoundedTabs;

import { Box, Tab, Tabs, Typography, alpha } from '@mui/material';

type Props = {
  tabs: any[]
  tabIndex: number
  onChange: (event:any, value:any)=>void
};

const RoundedTabs = ({ tabs, tabIndex, onChange }:Props) => (
    <Box sx={{ mt: 2, width: '100%', border: '1px solid', borderColor: 'primary.main', borderRadius: '12px', height: '36px' }}>
        <Tabs
            value={tabIndex}
            onChange={(event, value) => onChange(event, value)}
            TabIndicatorProps={{ sx: { width: '500px', backgroundColor: 'transparent', minHeight: '30px', height: '30px' } }}
            textColor="primary"
            variant="fullWidth"
        >
            {tabs.map((tab, index) => (
                <Tab
                    label={(
                        <Typography sx={{ fontWeight: 'bold', fontSize: '13px', color: 'primary' }}>
                            {tab.label}
                        </Typography>
                    )}
                    key={tab.label}
                    sx={{ 
                        minHeight: '35px',
                        height: '35px',
                        borderRight: index === tabs.length - 1 ? 'none' : '1px solid',
                        marginLeft: '0 !important',
                        borderColor: 'primary.main',
                        bgcolor: (theme) => (tabIndex === index ? alpha(theme.palette.primary.main, 0.1) : 'transparent'),
                    }}
                />
            ))}
        </Tabs>
    </Box>
);

export default RoundedTabs;



import { createContext, useContext, ReactNode } from 'react';
import { Stack, StackProps } from '@mui/material';

const TabPanelContext = createContext(0);

const useTab = () => {
  const context = useContext(TabPanelContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a <TabPanel />');
  }
  return context;
};

type TabIndex = number;

type TabPanelProps = {
  children: ReactNode;
  value: TabIndex;
};
export const TabPanel = ({ children, value }: TabPanelProps) => (
  <TabPanelContext.Provider value={value}>{children}</TabPanelContext.Provider>
);

export type TabPanelItemProps = StackProps & {
  children: ReactNode;
  index: TabIndex;
};

export const TabPanelItem = ({
  children,
  index,
  ...other
}: TabPanelItemProps) => {
  const currentTab = useTab();

  return (
    <Stack
      role="tabpanel"
      hidden={currentTab !== index}
      display={currentTab !== index ? 'none' : undefined}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      sx={{ height: '100%', overflowY: 'auto', ...other.sx }}
    >
      {currentTab === index && children}
    </Stack>
  );
};

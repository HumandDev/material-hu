import { createContext, useContext, useState } from 'react';
import SnackbarWrapper, { SnackbarProps } from './SnackbarWrapper';

type SnackbarContextType = {
  showSnackbar: (props: SnackbarProps) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  return context || { showSnackbar: () => {} };
};

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps | null>(
    null,
  );

  const showSnackbar = (props: SnackbarProps) => {
    setSnackbarProps(props);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarProps && <SnackbarWrapper {...snackbarProps} />}
    </SnackbarContext.Provider>
  );
};

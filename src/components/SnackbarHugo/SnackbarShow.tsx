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
  const [snackbarQueue, setSnackbarQueue] = useState<SnackbarProps[]>([]);

  const showSnackbar = (props: SnackbarProps) => {
    setSnackbarQueue(prev => [...prev, props]); // Agregar nuevo Snackbar a la cola
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {snackbarQueue.map((snackbarProps, index) => (
        <SnackbarWrapper
          key={index}
          {...snackbarProps}
        />
      ))}
    </SnackbarContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import SnackbarWrapper, { SnackbarProps } from './SnackbarWrapper';
import { Box } from '@mui/material';

type SnackbarContextType = {
  enqueueSnackbar: (props: SnackbarProps) => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined,
);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  return context || { enqueueSnackbar: () => {} };
};

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [snackbarQueue, setSnackbarQueue] = useState<SnackbarProps[]>([]);
  const [visibleSnackbars, setVisibleSnackbars] = useState<SnackbarProps[]>([]);

  const enqueueSnackbar = (props: SnackbarProps) => {
    setSnackbarQueue(prevQueue => [...prevQueue, props]);
  };

  useEffect(() => {
    if (snackbarQueue.length > 0) {
      setVisibleSnackbars(prev => {
        // Si ya hay 3 snackbars -> eliminar el más antiguo
        if (prev.length >= 3) return [...prev.slice(1), snackbarQueue[0]];

        // Si hay menos de 3 -> agregar uno nuevo
        return [...prev, snackbarQueue[0]];
      });
      setSnackbarQueue(prevQueue => prevQueue.slice(1));
    }
  }, [snackbarQueue]);

  const closeSnackbar = (index: number) => {
    setVisibleSnackbars(prev => prev.filter((_, i) => i !== index));
  };

  console.error(visibleSnackbars);

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      {children}
      {visibleSnackbars.map((snackbarProps, index) => (
        <Box
          key={index}
          sx={{
            mb: 2, // Margen entre snackbars
            transition: 'all 0.3s', // Transición suave
          }}
        >
          <SnackbarWrapper
            {...snackbarProps}
            onClose={() => closeSnackbar(index)}
          />
        </Box>
      ))}
    </SnackbarContext.Provider>
  );
};

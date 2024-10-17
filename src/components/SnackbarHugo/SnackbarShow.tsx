import React, { createContext, useContext, useState, useEffect } from 'react';
import SnackbarWrapper, { SnackbarProps } from './SnackbarWrapper';

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
    // Si hay menos de 3 snackbars visibles, mostrar el siguiente en cola
    if (visibleSnackbars.length < 3 && snackbarQueue.length > 0) {
      setVisibleSnackbars(prev => [...prev, snackbarQueue[0]]);
      setSnackbarQueue(prevQueue => prevQueue.slice(1));
    }

    // Si hay más de 3 snackbars, cerrar el más antiguo (el primero de la lista)
    if (visibleSnackbars.length === 3 && snackbarQueue.length > 0) {
      setVisibleSnackbars(prev => [...prev.slice(1), snackbarQueue[0]]);
      setSnackbarQueue(prevQueue => prevQueue.slice(1));
    }
  }, [snackbarQueue, visibleSnackbars]);

  return (
    <SnackbarContext.Provider value={{ enqueueSnackbar }}>
      {children}
      {visibleSnackbars.map((snackbarProps, index) => (
        <SnackbarWrapper
          key={index}
          {...snackbarProps}
        />
      ))}
    </SnackbarContext.Provider>
  );
};

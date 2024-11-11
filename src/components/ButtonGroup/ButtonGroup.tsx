import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

export type ButtonGroupProps = {
  labels: [string, string] | [string, string, string]; // Min 3 buttons - Max 3 buttons
  onChange?: (index: number) => void;
  fullWidth?: boolean;
  disableDoubleClick?: boolean;
};

const ButtonGroup = ({
  labels,
  onChange,
  fullWidth = false,
  disableDoubleClick = false,
}: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const buttonSelection = (index: number) => {
    setSelectedButton(prevSelected => {
      if (disableDoubleClick) return index;
      return prevSelected === index ? null : index;
    });
    onChange?.(index);
  };

  const {
    palette: { base },
  } = useTheme();

  return (
    <MUIButtonGroup
      variant="outlined"
      sx={{ display: 'flex', width: fullWidth ? '100%' : 'auto' }}
    >
      {labels.map((label, index) => (
        <Button
          key={index}
          onClick={() => buttonSelection(index)}
          sx={{
            backgroundColor:
              selectedButton === index ? base?.blueBrand[100] : 'none',
            borderColor: base?.blueBrand[200],
            borderWidth: 1,
            py: 1,
            px: 1.5,
            flexGrow: fullWidth ? 1 : 'initial',
          }}
          startIcon={selectedButton === index ? <IconCheck size={16} /> : null}
        >
          {label}
        </Button>
      ))}
    </MUIButtonGroup>
  );
};

export default ButtonGroup;

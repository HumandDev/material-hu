import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

export type ButtonGroupProps = {
  labels: string[];
};

const ButtonGroup = ({ labels }: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const buttonSelection = (index: number) => {
    setSelectedButton(prevSelected => (prevSelected === index ? null : index));
  };

  const {
    palette: { base },
  } = useTheme();

  return (
    <MUIButtonGroup variant="outlined">
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

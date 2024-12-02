import { Button, ButtonGroup as MUIButtonGroup, useTheme } from '@mui/material';
import { IconCheck } from '@tabler/icons-react';
import { useState } from 'react';

export type ButtonGroupProps = {
  labels: [string, string] | [string, string, string]; // Min 3 buttons - Max 3 buttons
  onChange?: (index: number) => void;
  fullWidth?: boolean;
  disableUnselect?: boolean;
  fixedCheck?: boolean;
};

const ButtonGroup = ({
  labels,
  onChange,
  fullWidth = false,
  disableUnselect = false,
  fixedCheck = false,
}: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<number | null>(0);

  const buttonSelection = (index: number) => {
    const newIndex = selectedButton === index ? null : index;
    const newSelected = disableUnselect ? index : newIndex;
    setSelectedButton(newSelected);

    // Execute onChange if its enabled Unselect or if its a different button
    if (
      !disableUnselect ||
      (disableUnselect && newSelected !== selectedButton)
    ) {
      onChange?.(index);
    }
  };

  const {
    palette: { base },
  } = useTheme();

  const noIcon = fixedCheck ? (
    <IconCheck
      size={16}
      color="none"
    />
  ) : null;

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
            flexBasis: fullWidth ? 1 : 'auto',
            textTransform: 'none',
          }}
          startIcon={
            selectedButton === index ? <IconCheck size={16} /> : noIcon
          }
          endIcon={noIcon}
        >
          {label}
        </Button>
      ))}
    </MUIButtonGroup>
  );
};

export default ButtonGroup;

import { FC, PropsWithChildren } from 'react';
import { Typography, useTheme } from '@mui/material';
import CardContainer from '../CardContainer';

export type SelectionCardProps = PropsWithChildren<{
  onClick: (param: boolean) => void;
  errorText?: string;
  error?: boolean;
  checked: boolean;
}>;

const SelectionCard: FC<SelectionCardProps> = props => {
  const { onClick, children, checked = false, error, errorText } = props;

  const theme = useTheme();

  const handleOnClick = () => onClick(!checked);

  return (
    <>
      <CardContainer
        onClick={handleOnClick}
        sx={{
          '&.MuiPaper-root': {
            cursor: 'pointer',
            backgroundColor: checked
              ? theme.palette.hugoBackground?.primaryBgLighter
              : theme.palette.hugoBackground?.neutralBgTerciary,
            borderColor: checked
              ? theme.palette.border?.primaryBorder
              : theme.palette.border?.neutralBorder,
          },
        }}
      >
        {children}
      </CardContainer>
      {error && (
        <Typography
          variant="globalS"
          fontWeight="fontWeightSemiBold"
          sx={{
            color: theme.palette.textColors?.errorText,
            mb: 0.5,
          }}
        >
          {errorText}
        </Typography>
      )}
    </>
  );
};

export default SelectionCard;

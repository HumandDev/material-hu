import { FC, PropsWithChildren } from 'react';
import { useTheme } from '@mui/material';
import CardContainer from '../CardContainer';

export type SelectionCardProps = PropsWithChildren<{
  onClick: (param: boolean) => void;
  checked: boolean;
}>;

const SelectionCard: FC<SelectionCardProps> = props => {
  const { onClick, children, checked = false } = props;

  const theme = useTheme();

  const handleOnClick = () => onClick(!checked);

  return (
    <CardContainer
      onClick={handleOnClick}
      sx={{
        '&': {
          cursor: 'pointer',
          backgroundColor: checked
            ? theme.palette.hugoBackground?.primaryBgLighter
            : theme.palette.hugoBackground?.neutralBgTerciary,
          borderColor: checked
            ? theme.palette.primary.main
            : theme.palette.primary.lightest,
        },
        ...(!checked && {
          '&:hover': {
            backgroundColor: theme.palette.hugoBackground?.neutralBgTerciary,
            borderColor: theme.palette.primary.light,
          },
        }),
      }}
    >
      {children}
    </CardContainer>
  );
};

export default SelectionCard;

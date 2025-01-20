import { ComponentProps, FC } from 'react';
import Avatar from '../Avatar/Avatar';
import CardContainer from '../CardContainer/CardContainer';
import Title from '../Title/Title';
import { IconZoomExclamation } from '@tabler/icons-react';

export type StateCardProps = Pick<
  ComponentProps<typeof Title>,
  'title' | 'description'
> &
  Pick<ComponentProps<typeof Avatar>, 'Icon'> &
  Pick<ComponentProps<typeof CardContainer>, 'sx'>;

export const StateCard: FC<StateCardProps> = ({
  sx,
  Icon = IconZoomExclamation,
  ...titleProps
}) => {
  return (
    <CardContainer
      sx={{
        width: '100%',
        '& .MuiCardContent-root': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        },
        ...sx,
      }}
    >
      <Avatar
        size="large"
        Icon={Icon}
      />
      <Title
        variant="S"
        centered
        {...titleProps}
      />
    </CardContainer>
  );
};

export default StateCard;

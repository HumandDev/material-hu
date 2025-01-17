import { FC } from 'react';
import { Stack } from '@mui/material';
import CardContainer, {
  CardContainerProps,
} from '../CardContainer/CardContainer';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';
import ListItem from '../List/ListItem';
import { getDistanceToNow } from '../../utils/time';
import { useTranslation } from './i18n';

export type PostProps = {
  profilePicture?: string;
  fullName: string;
  text: string;
  publicationDatetime: string;
  sx?: CardContainerProps['sx'];
};

export const Post: FC<PostProps> = ({
  profilePicture,
  fullName,
  text,
  publicationDatetime,
  sx,
}) => {
  const { t } = useTranslation();
  return (
    <CardContainer
      fullWidth
      padding={24}
      sx={sx}
    >
      <Stack sx={{ gap: 2 }}>
        <ListItem
          avatar={{ src: profilePicture, text: getInitials(fullName) }}
          text={{
            title: fullName,
            description: t('TIME_DISTANCE', {
              distance: getDistanceToNow(publicationDatetime),
            }),
          }}
          sx={{ '.MuiListItem-root': { p: 0 } }}
        />
        <SeeMoreText
          text={text}
          lines={6}
        />
      </Stack>
    </CardContainer>
  );
};

export default Post;

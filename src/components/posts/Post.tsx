import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import CardContainer from '../CardContainer/CardContainer';
import Avatar from '../Avatar/Avatar';
import { getInitials } from '../../utils/user';
import SeeMoreText from '../SeeMoreText/SeeMoreText';

export type PostProps = {
  profilePicture?: string;
  fullName: string;
  text: string;
};

export const Post: FC<PostProps> = ({ profilePicture, fullName, text }) => (
  <CardContainer
    fullWidth
    padding={24}
  >
    <Stack sx={{ gap: 2 }}>
      <Stack sx={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <Avatar
          src={profilePicture}
          text={getInitials(fullName)}
        />
        <Typography sx={{ flex: 1 }}>{fullName}</Typography>
      </Stack>
      <SeeMoreText
        text={text}
        lines={6}
      />
    </Stack>
  </CardContainer>
);

export default Post;

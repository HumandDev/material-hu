import { colorPalette } from '../../theme/hugo/colors';
import {
  Rating as MuiRating,
  RatingProps as MuiRatingProps,
} from '@mui/material';
import { IconStar, IconStarFilled } from '@tabler/icons-react';

export type RatingProps = Omit<MuiRatingProps, 'precision'>;

const mapSize = {
  small: 18,
  medium: 24,
  large: 30,
};

const Rating = ({ max, size, ...props }: RatingProps) => {
  const validMax = Math.max(max || 5, 1);
  const validSize = mapSize[size || 'medium'];

  return (
    <MuiRating
      sx={{ color: colorPalette.buttons.buttonPrimaryEnabled, gap: 0.5 }}
      emptyIcon={<IconStar size={validSize} />}
      icon={<IconStarFilled size={validSize} />}
      max={validMax}
      {...props}
      precision={1}
    />
  );
};

export default Rating;

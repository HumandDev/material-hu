import Rating, { RatingProps } from './Rating';
import { Controller } from 'react-hook-form';

type Props = {
  name: string;
  inputProps?: RatingProps;
};

const FormRating = ({ name, inputProps = {} }: Props) => {
  return (
    <Controller
      render={({ field }) => (
        <Rating
          {...field}
          {...inputProps}
        />
      )}
      name={name}
    />
  );
};

export default FormRating;

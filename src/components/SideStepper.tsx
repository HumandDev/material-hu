import { Card, CardContent } from '@mui/material';
import CustomStepper, { CustomStepperProps } from './CustomStepper';

const SiteStepper = (props: CustomStepperProps) => (
  <Card
    variant="outlined"
    elevation={0}
    sx={{ width: '20%', alignSelf: 'flex-start' }}
  >
    <CardContent>
      <CustomStepper {...props} />
    </CardContent>
  </Card>
);

export default SiteStepper;

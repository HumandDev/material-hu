import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardProps,
  Palette,
  Typography,
  useTheme,
} from '@mui/material';
import {
  AddBoxOutlined as AddIcon,
  Check as CheckIcon,
  ErrorOutline as ErrorIcon,
  InfoOutlined as InfoIcon,
  WarningAmberRounded as WarningIcon,
} from '@mui/icons-material';

export type CardContainerProps = CardProps & {
  badge?: {
    type: 'default' | 'error' | 'success' | 'warning' | 'info' | 'highlight';
    label: string;
    hasIcon?: boolean;
  };
  footer?:
    | {
        action1: {
          onClick: () => void;
          title: string;
        };
        text: string;
      }
    | {
        action1: {
          onClick: () => void;
          title: string;
        };
        action2: {
          onClick: () => void;
          title: string;
        };
      };
};

type BadgeProps = {
  icon: React.ElementType;
  backgroundColor: string;
  borderColor: string;
  fontColor: string;
};

const getBadgeProps = (type: string, palette: Palette): BadgeProps => {
  switch (type) {
    case 'success':
      return {
        icon: CheckIcon,
        backgroundColor: palette.base?.green[100]!,
        borderColor: palette.base?.green[200]!,
        fontColor: palette.base?.green[800]!,
      };
    case 'warning':
      return {
        icon: WarningIcon,
        backgroundColor: palette.base?.yellow[100]!,
        borderColor: palette.base?.yellow[200]!,
        fontColor: palette.base?.yellow[800]!,
      };
    case 'info':
      return {
        icon: InfoIcon,
        backgroundColor: palette.base?.lightBlue[100]!,
        borderColor: palette.base?.lightBlue[200]!,
        fontColor: palette.base?.lightBlue[800]!,
      };
    case 'highlight':
      return {
        icon: AddIcon,
        backgroundColor: palette.base?.lilac[100]!,
        borderColor: palette.base?.lilac[200]!,
        fontColor: palette.base?.lilac[800]!,
      };
    case 'error':
    default:
      return {
        icon: ErrorIcon,
        backgroundColor: palette.base?.red[100]!,
        borderColor: palette.base?.red[200]!,
        fontColor: palette.base?.red[800]!,
      };
  }
};

const getFooterActions = (footer: CardContainerProps['footer']) => {
  if (!footer) return null;
  if ('action2' in footer) {
    return (
      <>
        <Button
          variant="text"
          {...footer.action2}
        >
          {footer.action2.title}
        </Button>
        <Button
          variant="contained"
          {...footer.action1}
        >
          {footer.action1.title}
        </Button>
      </>
    );
  } else {
    return (
      <>
        <Typography>{footer.text}</Typography>
        <Button
          variant="contained"
          {...footer.action1}
        ></Button>
      </>
    );
  }
};

const CardContainer = ({
  badge = undefined,
  footer = undefined,
  children,
  ...props
}: CardContainerProps) => {
  const theme = useTheme();
  const badgeProps = badge ? getBadgeProps(badge.type, theme.palette) : null;
  const footerActions = getFooterActions(footer);

  console.error(
    badgeProps,
    theme.palette.base,
    theme.palette.base?.yellow[100] || 'null base',
  );

  return (
    <Card
      sx={{
        borderRadius: '16px',
        width: 328,
        border: '1px solid #E9E9F4',
        boxShadow: '-1px 4px 8px 0px #E9E9F4',
        my: 2,
        ...props,
      }}
    >
      <CardContent>
        <Typography>Texto contenido texto contenido</Typography>
        <Typography>Texto contenido texto contenido</Typography>
        {children}
      </CardContent>
      {footer && (
        <CardActions
          sx={{
            justifyContent: 'space-between',
            borderTop: '1px solid #E9E9F4',
            p: '8px 16px 8px 16px',
          }}
        >
          {footerActions}
        </CardActions>
      )}
      {badge && badgeProps && (
        <Box
          sx={{
            padding: '4px 16px 4px 16px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '25px',
            backgroundColor: badgeProps.backgroundColor,
            border: `1px solid ${badgeProps.borderColor}`,
          }}
        >
          <badgeProps.icon
            sx={{
              color: badgeProps.fontColor,
              fontSize: 'small',
              mr: 0.5,
            }}
          />
          <Typography sx={{ color: badgeProps.fontColor, fontSize: '12px' }}>
            {/* globalXXS */}
            {badge.label}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default CardContainer;

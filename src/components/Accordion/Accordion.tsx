import { FC, ReactNode } from 'react';
import {
  AccordionProps as MuiAccordionProps,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  Stack,
  Typography,
  AccordionDetails,
  Link,
  useTheme,
} from '@mui/material';
import { IconChevronDown, IconArrowRight } from '@tabler/icons-react';
import Avatar, { AvatarProps } from '../Avatar/Avatar';
import Pills, { PillsProps } from '../Pills/Pills';

export type AccordionProps = Partial<MuiAccordionProps> & {
  title: string;
  avatar?: AvatarProps;
  caption?: string;
  description?: string;
  pill?: PillsProps;
  customDetail?: ReactNode;
  textDetail?: {
    description: string;
    link: string;
    label: string;
  };
};

const Accordion: FC<AccordionProps> = ({
  title,
  caption = '',
  description = '',
  avatar = null,
  pill,
  textDetail = null,
  customDetail = null,
  ...accordionProps
}) => {
  const theme = useTheme();
  return (
    <MuiAccordion
      sx={{
        borderRadius: '8px',
        '&:before': {
          backgroundColor: 'transparent',
        },
        mb: 2,
      }}
      {...accordionProps}
    >
      <MuiAccordionSummary
        sx={{
          p: 2,
          m: 0,
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        }}
        expandIcon={<IconChevronDown />}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            mr: 2,
          }}
        >
          <Stack
            sx={{
              flexDirection: 'row',
              gap: 1,
              width: 'inherit',
              alignItems: 'inherit',
            }}
          >
            {avatar && (
              <Avatar
                src={avatar.src}
                alt={avatar.alt}
              />
            )}
            <Stack>
              {caption && (
                <Typography
                  variant="globalXXS"
                  fontWeight="regular"
                >
                  {caption}
                </Typography>
              )}
              <Typography
                variant="globalS"
                fontWeight="semiBold"
              >
                {title}
              </Typography>
              {description && (
                <Typography
                  variant="globalXS"
                  fontWeight="regular"
                >
                  {description}
                </Typography>
              )}
            </Stack>
          </Stack>
          {pill && (
            <Pills
              sx={{ alignSelf: 'flex-end' }}
              {...pill}
            />
          )}
        </Stack>
      </MuiAccordionSummary>
      <AccordionDetails
        sx={{
          p: 0,
          pl: '4px',
        }}
      >
        <Stack>
          {!textDetail && <Stack sx={{ p: 2 }}>{customDetail}</Stack>}
          {textDetail && (
            <Stack sx={{ px: 2, pb: 2, gap: 1 }}>
              <Typography
                variant="globalS"
                fontWeight="regular"
              >
                {textDetail.description}
              </Typography>
              <Link
                sx={{
                  color: theme.palette.primary.main,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 0.5,
                }}
                href={textDetail.link}
              >
                {textDetail.label}
                <IconArrowRight
                  size="1em"
                  color={theme.palette.primary.main}
                />
              </Link>
            </Stack>
          )}
        </Stack>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;

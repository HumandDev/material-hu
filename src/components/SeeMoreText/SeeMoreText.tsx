import { FC, useState, useRef, useMemo, useEffect } from 'react';
import {
  Button,
  ButtonProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { useTranslation } from './i18n';
import { mapNewLines, isTextClamped } from '../../utils/string';

export type ShowMoreTextProps = {
  seeMoreText?: string;
  seeLessText?: string;
  lines?: number;
  isHtmlText?: boolean;
  text: string;
  buttonSx?: ButtonProps['sx'];
  typographyProps?: TypographyProps;
};

export const ShowMoreText: FC<ShowMoreTextProps> = props => {
  const {
    seeMoreText,
    seeLessText,
    lines = 3,
    isHtmlText = false,
    text,
    buttonSx,
    typographyProps,
  } = props;

  const [show, setShow] = useState<boolean>(false);
  const [isCroped, setIsCroped] = useState(false);

  const textRef = useRef(null);

  const { t } = useTranslation();

  const handleSeeMore = () => {
    setShow(true);
  };

  const handleSeeLess = () => {
    setShow(false);
  };

  const formatedText = useMemo(() => mapNewLines(text), [text]);

  useEffect(() => {
    if (textRef.current) {
      setIsCroped(isTextClamped(textRef));
    }
  }, [textRef.current, show]);

  if (lines < 1) {
    return <Typography {...typographyProps}>{formatedText}</Typography>;
  }

  const renderText = () => {
    const sx = {
      '&.clamp': {
        width: '100%',
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: `${lines}`,
        WebkitBoxFlex: '1',
      },
    };

    return (
      <Typography
        ref={textRef}
        {...typographyProps}
        sx={{ sx, ...typographyProps?.sx }}
        {...(isHtmlText ? { __html: text } : { children: formatedText })}
      />
    );
  };

  return (
    <>
      {renderText()}
      {show && (
        <Button
          sx={buttonSx}
          onClick={handleSeeLess}
        >
          {seeLessText || t('SEE_LESS')}
        </Button>
      )}
      {!show && isCroped && (
        <Button
          sx={buttonSx}
          onClick={handleSeeMore}
        >
          {seeMoreText || t('SEE_MORE')}
        </Button>
      )}
    </>
  );
};

export default ShowMoreText;
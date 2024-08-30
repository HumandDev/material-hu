import { FC, useRef, useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Slider,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Button from '@mui/lab/LoadingButton';
import AvatarEditor from 'react-avatar-editor';
import {
  IconZoomOut as ZoomOutIcon,
  IconZoomIn as ZoomInIcon,
} from '@tabler/icons-react';

export type CroppingModalProps = {
  file: File;
  onClose: () => void;
  onSave: (file: File) => void;
  onChangeSlider?: (event: Event, newValue: number | number[]) => void;
  recommendedWidth: number;
  recommendedHeight: number;
  title?: string;
  cancelLabel?: string;
  saveLabel?: string;
  sliderLabel?: string;
};

export const CroppingModal: FC<CroppingModalProps> = props => {
  const {
    file,
    onClose,
    onSave,
    onChangeSlider = () => null,
    recommendedWidth,
    recommendedHeight,
    title,
    cancelLabel,
    saveLabel,
    sliderLabel,
  } = props;

  const theme = useTheme();

  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const dimensionIfSmall = isSmallDevice ? 3 : 1.5;
  const dimentionAdjustment = isMobileDevice ? 5 : dimensionIfSmall;
  const adjustedWidth = recommendedWidth / dimentionAdjustment;
  const adjustedHeight = recommendedHeight / dimentionAdjustment;

  const editor = useRef(null);

  const [zoom, setZoom] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    onChangeSlider(event, newValue);
    setZoom(newValue as number);
  };

  const handleSave = async () => {
    setLoading(true);

    if (!editor?.current) return;

    const dataUrl = (editor.current as any)
      .getImageScaledToCanvas()
      .toDataURL();

    const result = await fetch(dataUrl);
    const blob = await result.blob();
    const newFile = new File([blob], file.name, { type: file.type });

    await onSave(newFile);
    onClose();
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <AvatarEditor
          ref={editor}
          image={file}
          width={recommendedWidth}
          height={recommendedHeight}
          border={30}
          scale={1 + zoom / 100}
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: adjustedWidth,
            height: adjustedHeight,
          }}
          color={[0, 0, 0, 0.7]}
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <ZoomOutIcon />
          <Slider
            aria-label={sliderLabel}
            value={zoom}
            onChange={handleChangeSlider}
          />
          <ZoomInIcon />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelLabel}</Button>
        <Button
          variant="contained"
          onClick={handleSave}
          loading={loading}
        >
          {saveLabel}
        </Button>
      </DialogActions>
    </>
  );
};

export default CroppingModal;

import { FC } from 'react';
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
export declare const CroppingModal: FC<CroppingModalProps>;
export default CroppingModal;

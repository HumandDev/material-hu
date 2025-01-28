export type ButtonGroupProps = {
    labels: [string, string] | [string, string, string];
    onChange?: (index: number) => void;
    fullWidth?: boolean;
    disableUnselect?: boolean;
    fixedCheck?: boolean;
    showCheckIcon?: boolean;
};
declare const ButtonGroup: ({ labels, onChange, fullWidth, disableUnselect, fixedCheck, showCheckIcon }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;

export type ButtonGroupProps = {
    labels: [string, string] | [string, string, string];
    onChange?: (index: number) => void;
    fullWidth?: boolean;
    disableUnselect?: boolean;
    fixedCheck?: boolean;
};
declare const ButtonGroup: ({ labels, onChange, fullWidth, disableUnselect, fixedCheck, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;

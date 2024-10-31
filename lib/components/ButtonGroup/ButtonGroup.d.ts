export type ButtonGroupProps = {
    labels: [string, string] | [string, string, string];
    onChange?: (index: number) => void;
    fullWidth?: boolean;
};
declare const ButtonGroup: ({ labels, onChange, fullWidth, }: ButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonGroup;

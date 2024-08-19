/// <reference types="react" />
declare const DisplayGroupItem: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
    children?: import("react").ReactNode;
    direction?: import("@mui/system").ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse"> | undefined;
    spacing?: import("@mui/system").ResponsiveStyleValue<string | number> | undefined;
    divider?: import("react").ReactNode;
    useFlexGap?: boolean | undefined;
    sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
} & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, "direction" | "children" | "spacing" | ("flex" | "height" | "width" | "left" | "top" | "alignContent" | "alignItems" | "alignSelf" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "bottom" | "boxShadow" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gap" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridRow" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "justifyContent" | "justifyItems" | "justifySelf" | "letterSpacing" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "overflow" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "visibility" | "whiteSpace" | "zIndex" | "p" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | "sx" | "divider" | "useFlexGap" | keyof import("@mui/material/OverridableComponent").CommonProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
export default DisplayGroupItem;

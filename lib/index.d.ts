/// <reference types="react" />
export * from '@mui/material';
export * from '@mui/x-date-pickers';
export * from '@mui/x-date-pickers/AdapterDateFns';
export * from '@mui/x-date-pickers/internals/hooks/useDesktopPicker';
export { default as Button, type LoadingButtonProps as ButtonProps, } from '@mui/lab/LoadingButton';
export { TreeView, TreeItem } from '@mui/lab';
export { createNewTheme } from './theme/material-hu';
export { default as IconsMenu } from './components/IconsMenu';
export { default as NewModal } from './components/NewModal';
export { default as useSnackbarUtils } from './components/Snackbar';
export { default as RoundedTabs } from './components/RoundedTabs';
export { default as FormRichEditor } from './components/FormRichEditor';
export { default as CustomStepper, CustomStepperProps, } from './components/CustomStepper';
export { default as SideStepper } from './components/SideStepper';
export { default as HorizontalStepper, HorizontalStepperProps, StepType, } from './components/HorizontalStepper';
export { default as FormDrop, FormDropProps, FormDropTypes, FormDropContext, } from './components/FormDrop';
export { default as CroppingModal, CroppingModalProps, } from './components/CroppingModal';
export { default as DocumentItem, DocumentItemProps, } from './components/DocumentItem';
export { default as CenteredCircularProgress } from './components/CircularProgress';
export { default as FormRadioCustomGroup, FormRadioCustomGroupProps, } from './components/FormRadioCustomGroup';
export { useDebounce } from './hooks/useDebounce';
export { useServerPagination, TableSortingHeaderProps, } from './hooks/useServerPagination';
export { useClientPagination } from './hooks/useClientPagination';
export { useModal } from './hooks/useModal';
export { createHuGoTheme } from './theme/hugo';
export declare const PeopleExperience: {
    DisplayGroup: <TData extends {
        id: import("react").Key;
    }>({ items, renderItem, }: {
        items: TData[];
        renderItem: (item: TData, index: number) => JSX.Element;
    }) => import("react/jsx-runtime").JSX.Element;
    DisplayGroupItem: import("@emotion/styled").StyledComponent<import("@mui/system").SystemProps<import("@mui/material").Theme> & {
        children?: import("react").ReactNode;
        direction?: import("@mui/system").ResponsiveStyleValue<"column" | "column-reverse" | "row" | "row-reverse"> | undefined;
        spacing?: import("@mui/system").ResponsiveStyleValue<string | number> | undefined;
        divider?: import("react").ReactNode;
        useFlexGap?: boolean | undefined;
        sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    } & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
    }, "direction" | "children" | "spacing" | ("flex" | "height" | "width" | "left" | "top" | "alignContent" | "alignItems" | "alignSelf" | "border" | "borderBottom" | "borderColor" | "borderLeft" | "borderRadius" | "borderRight" | "borderTop" | "bottom" | "boxShadow" | "boxSizing" | "color" | "columnGap" | "display" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "fontFamily" | "fontSize" | "fontStyle" | "fontWeight" | "gap" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridRow" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "justifyContent" | "justifyItems" | "justifySelf" | "letterSpacing" | "lineHeight" | "margin" | "marginBottom" | "marginLeft" | "marginRight" | "marginTop" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "order" | "overflow" | "padding" | "paddingBottom" | "paddingLeft" | "paddingRight" | "paddingTop" | "position" | "right" | "rowGap" | "textAlign" | "textOverflow" | "textTransform" | "visibility" | "whiteSpace" | "zIndex" | "p" | "bgcolor" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "marginX" | "my" | "marginY" | "pt" | "pr" | "pb" | "pl" | "px" | "paddingX" | "py" | "paddingY" | "typography" | "displayPrint") | "sx" | "divider" | "useFlexGap" | keyof import("@mui/material/OverridableComponent").CommonProps> & import("@mui/system").MUIStyledCommonProps<import("@mui/material").Theme>, {}, {}>;
    ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
    ParticipationExpandableItem: ({ children, primary, secondary, partial, total, slotProps, }: import("./components/peopleExperience/Participation").ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;
    ParticipationItem: ({ primary, secondary, partial, total, slotProps, }: import("./components/peopleExperience/Participation").ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
    ValueIndicator: ({ value, label, loading, description, slotProps, }: {
        value: string | number;
        label: string;
        loading?: boolean | undefined;
        description?: string | undefined;
        slotProps?: Partial<{
            container: import("@mui/material").StackProps;
        }> | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    ListWithDivider: ({ items, dividerProps, ...other }: {
        children?: import("react").ReactNode;
        classes?: Partial<import("@mui/material").ListClasses> | undefined;
        dense?: boolean | undefined;
        disablePadding?: boolean | undefined;
        subheader?: import("react").ReactNode;
        sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    } & import("@mui/material/OverridableComponent").CommonProps & Omit<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "ref"> & {
        ref?: ((instance: HTMLUListElement | null) => void) | import("react").RefObject<HTMLUListElement> | null | undefined;
    }, "children" | "dense" | "sx" | keyof import("@mui/material/OverridableComponent").CommonProps | "subheader" | "disablePadding"> & {
        items: import("react").ReactNode[];
        dividerProps?: import("@mui/material").DividerProps | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    ResultContainer: ({ title, children, subtitle, actions, sx, }: {
        title: string;
        subtitle?: string | undefined;
        children: import("react").ReactNode;
        actions?: import("react").ReactNode;
        sx?: import("@mui/material").SxProps<import("@mui/material").Theme> | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    LinearProgressWithLabel: ({ linearProgressProps, value, ...other }: import("./components/peopleExperience/LinearProgressWithLabel").LinearProgressWithLabelProps) => import("react/jsx-runtime").JSX.Element;
    ActionsMenu: ({ children, renderTrigger, closeOnSelect }: {
        children: import("react").ReactNode;
        renderTrigger: (props: {
            ariaProps: object;
            handleOpen: (event: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void;
            open: boolean;
        }) => JSX.Element;
        closeOnSelect?: boolean | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    ActionsMenuItem: ({ onClick, sx, ...props }: import("@mui/material").MenuItemProps) => import("react/jsx-runtime").JSX.Element;
    SideTabNavigation: ({ selectedIndex, onChangeIndex, tabs, title, layout: Layout, slotProps, }: {
        title: string;
        selectedIndex: number;
        onChangeIndex: (nextIndex: number) => void;
        tabs: import("./components/peopleExperience/SideTabNavigation").Tab[];
        layout?: import("react").ComponentType<{
            children: import("react").ReactNode;
        }> | undefined;
        slotProps?: Partial<{
            tabs: import("@mui/material").StackProps;
        }> | undefined;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanel: ({ children, value }: {
        children: import("react").ReactNode;
        value: number;
    }) => import("react/jsx-runtime").JSX.Element;
    TabPanelItem: ({ children, index, ...other }: import("./components/peopleExperience/TabPanel").TabPanelItemProps) => import("react/jsx-runtime").JSX.Element;
};

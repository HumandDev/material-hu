import { ReactNode } from 'react';
export declare const ParticipationItemSkeleton: () => import("react/jsx-runtime").JSX.Element;
export type ParticipationItemProps = {
    primary: string;
    secondary?: string | null;
    partial: number;
    total: number;
};
export declare const ParticipationItem: ({ primary, secondary, partial, total, }: ParticipationItemProps) => import("react/jsx-runtime").JSX.Element;
export type ParticipationExpandableItemProps = ParticipationItemProps & {
    children: (expandable: boolean) => ReactNode;
};
export declare const ParticipationExpandableItem: ({ children, primary, secondary, partial, total, }: ParticipationExpandableItemProps) => import("react/jsx-runtime").JSX.Element;

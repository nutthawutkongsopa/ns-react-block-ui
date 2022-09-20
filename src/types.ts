import React from 'react'

export interface BlockUIPropsBase {
    blocking?: boolean;
    message?: string | React.ReactNode;
    overlayStyle?: React.CSSProperties;
    loader?: "default" | React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    mode?: "contain" | "stretch" | "full-screen";
    cursor?: "inherit" | "wait" | "default" | "progress" | "not-allowed";
    hideScroll?: boolean;
}

export interface BlockUIProps extends BlockUIPropsBase {
    children?: React.ReactNode;
}

export interface BlockUIContextData {
    blocking?: boolean;
    message?: string;
    loader?: React.ReactNode;
}
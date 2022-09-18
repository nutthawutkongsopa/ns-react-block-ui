import React from 'react'

export interface BlockUIPropsBase {
    blocking?: boolean,
    message?: string | React.ReactNode,
    overlayStyle?: React.CSSProperties,
    loader?: React.ReactNode,
    style?: React.CSSProperties
    className?: string
}

export interface BlockUIProps extends BlockUIPropsBase {
    children?: React.ReactNode,
}

export interface BlockUIContextData {
    blocking?: boolean,
    message?: string,
    loader?: React.ReactNode,
}
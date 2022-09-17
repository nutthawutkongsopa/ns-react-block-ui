import React from 'react'

export interface BlockUIProps {
    blocking?: boolean,
    children?: React.ReactNode,
    message?: string | React.ReactNode,
    overlayStyle?: React.CSSProperties,
    loader?: React.ReactNode,
    style?: React.CSSProperties
    className?: string
}

export interface BlockUIContextData {
    blocking?: boolean,
    message?: string,
    loader?: React.ReactNode,
}
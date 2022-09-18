import React, { Fragment, useEffect, useRef, useState } from 'react';
import DefaultLoader from './Loader';
import { BlockUIProps, BlockUIPropsBase } from './types';
import "./style.scss"

const BlockUI: React.FC<BlockUIProps> = ({
    message = "",
    children = <></>,
    overlayStyle,
    blocking = false,
    mode = "contain",
    ...props
}) => {
    const [overlayAnimateClass, setOverlayAnimateClass] = useState("")
    const [isBlocking, setIsBlocking] = useState(blocking);
    const refEl = useRef<HTMLDivElement>(null);

    const resolveLoader = () => {
        if (props.loader === "default")
            return <DefaultLoader />
        else if (props.loader && React.isValidElement(props.loader))
            return props.loader
        else
            return <></>
    }

    useEffect(() => {
        if (blocking) {
            if (refEl.current?.contains(document.activeElement)) {
                const el = document.activeElement as HTMLElement;
                if (el) {
                    el.blur()
                }
            }
            setOverlayAnimateClass("fadein");
            setIsBlocking(true);
            setTimeout(() => {
                setOverlayAnimateClass("");
            }, 200);
        } else {
            setOverlayAnimateClass("fadeout");
            setTimeout(() => {
                setIsBlocking(false);
            }, 300);
        }
    }, [blocking])
    return (
        <div className={`ns-block-ui ${mode === "stretch" ? "stretch" : ""} ${isBlocking ? "blocking" : ""} ${props.className || ""}`} aria-busy={isBlocking} ref={refEl}>
            {children}
            {isBlocking && <div className={`ns-block-ui-container ${overlayAnimateClass}`}>
                <div className={`ns-block-ui-overlay`} style={(overlayStyle || {})}></div>
                <div className={`ns-block-ui-loader-container`}>
                    {resolveLoader()}
                    {message}
                </div>
            </div>
            }
        </div>
    )
}

export const setBlockUIDefaultProps = (props: BlockUIPropsBase) => {
    BlockUI.defaultProps = props
}

export { BlockUI }
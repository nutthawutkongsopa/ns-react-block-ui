import React, { Fragment, useEffect, useRef, useState } from 'react';
import DefaultLoader from './Loader';
import { BlockUIProps, BlockUIPropsBase } from './types';
import "./style.scss"

let currentState: boolean
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
    currentState = blocking;

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
                setIsBlocking(currentState);
            }, 300);
        }
    }, [blocking])
    return (
        <div className={`ns-block-ui ${mode || "contain"} ${isBlocking ? "blocking" : ""} ${props.className || ""} ${props.hideScroll ? "noscroll" : ""}`} aria-busy={isBlocking} ref={refEl}
            style={{ ...(props.style || {}) }}>
            {children}
            {isBlocking && <div className={`ns-block-ui-container ${overlayAnimateClass}`} style={{ cursor: props.cursor || "inherit" }}>
                <div className={`ns-block-ui-overlay`} style={(overlayStyle || {})}></div>
                <div className="ns-block-ui-loader-container">
                    <div className={`ns-block-ui-loader`}>
                        {resolveLoader()}
                    </div>
                    {
                        message && <div className="ns-block-ui-message">
                            {message}
                        </div>
                    }
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
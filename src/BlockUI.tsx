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
    const [statusStack, setStatusStack] = useState<boolean[]>([]);
    const refEl = useRef<HTMLDivElement>(null);
    const refFirstLoad = useRef(true)
    const refStatusStack = useRef<boolean[]>([])

    const resolveLoader = () => {
        if (props.loader === "default")
            return <DefaultLoader />
        else if (props.loader && React.isValidElement(props.loader))
            return props.loader
        else
            return <></>
    }

    const isBlocking = !!statusStack[0];

    useEffect(() => {
        if (blocking) {
            refFirstLoad.current = false;
            if (refEl.current?.contains(document.activeElement)) {
                const el = document.activeElement as HTMLElement;
                if (el) {
                    el.blur()
                }
            }
            setOverlayAnimateClass("fadein");
            setStatusStack(prev => [...prev, true])
            refStatusStack.current = [...refStatusStack.current, true]
            setTimeout(() => {
                setOverlayAnimateClass("");
            }, 200);
        } else {
            if (!refFirstLoad.current) {
                setOverlayAnimateClass("fadeout");
                setTimeout(() => {
                    const stack = [...refStatusStack.current]
                    stack.shift()
                    setStatusStack([...stack])
                    refStatusStack.current = [...stack]
                }, 300);
            }
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
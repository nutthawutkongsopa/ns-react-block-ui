import React, { createContext, useContext, useState } from 'react';
import { BlockUI } from './BlockUI';
import { BlockUIContextData, BlockUIProps } from './types';

const BlockUIContext = createContext<{ data: BlockUIContextData, setBlockUI: (data: BlockUIContextData) => void }>({ data: {}, setBlockUI: (x) => { } })

const useBlockUIContext = () => useContext(BlockUIContext)

const BlockUIProvider: React.FC<BlockUIProps> = ({ children, ...props }) => {
    const [data, setData] = useState<BlockUIContextData>({})
    const setContextData = (data: BlockUIContextData) => {
        setData(data);
    }

    return (
        <BlockUIContext.Provider value={{ data, setBlockUI: setContextData }}>
            <BlockUI {...{ ...props, mode: props.mode || "full-screen", ...data }}>
                {children}
            </BlockUI>
        </BlockUIContext.Provider>
    )
}

export { BlockUIContext, BlockUIProvider, useBlockUIContext }
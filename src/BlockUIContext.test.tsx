import React, { useEffect, FC } from "react";
import { getAllByText, render } from "@testing-library/react";

import { BlockUIProvider, useBlockUIContext } from './BlockUIContext'
import { equal } from "assert";

const TestingComponent = (props: { blocking: boolean }) => {
    const { setBlockUI } = useBlockUIContext();
    useEffect(() => {
        setBlockUI({ blocking: props.blocking })
    }, [])

    return (
        <>
        </>
    );
};

describe("BlockUIProvider", () => {
    test("BlockUIProvider is a component", () => {
        render(<BlockUIProvider />);
    });

    test('expected BlockUIProvider show BlockUI and message', () => {
        render(
            <BlockUIProvider message="test block message">
                <TestingComponent blocking={true} />
            </BlockUIProvider>,
        ).getByText("test block message")
    });

    test('expected BlockUIProvider hide BlockUI and message', () => {
        render(
            <BlockUIProvider message="test block message">
                <TestingComponent blocking={false} />
            </BlockUIProvider>
        ).findAllByText("test block message").then(x => equal(x.length, 0))
    });
});


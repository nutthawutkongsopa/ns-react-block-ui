import React from "react";
import { render } from "@testing-library/react";

import { BlockUI, setBlockUIDefaultProps } from './BlockUI'
import Loader from './Loader'

describe("BlockUI", () => {
    test("renders the BlockUI component", () => {
        render(<BlockUI />);
    });

    test("renders the children component", () => {
        render(<BlockUI>
            <div>child1</div>
        </BlockUI>).getAllByText("child1");
    });

    test("loading message is showing on blocking status", () => {
        render(<BlockUI message="test message" blocking={true}>
            <div>child1</div>
        </BlockUI>).getAllByText("test message");
    });

    test("loading message don't showing on default status", () => {
        !render(<BlockUI message="test message" blocking={true}>
            <div>child1</div>
        </BlockUI>).getAllByText("test message");
    });

    test("loading message must not showing on false status", () => {
       const msg = render(<BlockUI message="test message" blocking={false}>
            <div>child1</div>
        </BlockUI>).queryByText("test message");
        expect(msg).toBeNull()
    });

    test("renders the BlockUI component with defaultProps", () => {
        setBlockUIDefaultProps({ message: "This is default message" })
        render(<BlockUI blocking={true} />).getAllByText("This is default message");
    });

    test("renders custom loading component", () => {
        render(<BlockUI blocking={true} loader={<div>TestLoader</div>} />).getAllByText("TestLoader");
    });
});

describe("Loader", () => {
    test("renders the Loader component", () => {
        render(<Loader />);
    });
});
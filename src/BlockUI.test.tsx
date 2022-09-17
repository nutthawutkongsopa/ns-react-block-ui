import React from "react";
import { render } from "@testing-library/react";

import { BlockUI } from './BlockUI'
import Loader from './Loader'

describe("BlockUI", () => {
    test("renders the Button component", () => {
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

    test("loading message don't showing", () => {
        !render(<BlockUI message="test message" blocking={true}>
            <div>child1</div>
        </BlockUI>).getAllByText("test message");
    });
});

describe("Loader", () => {
    test("renders the Loader component", () => {
        render(<Loader />);
    });
});
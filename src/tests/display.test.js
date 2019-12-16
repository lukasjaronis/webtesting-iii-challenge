import React from "react";
import { render } from "@testing-library/react";
import { closed, locked } from '../controls/Controls';

import Display from '../display/Display';

// closed
test('Matches closed gate snapshot', () => {
const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
const tree = render(<Display className={closedClass} />)
expect(tree.baseElement).toMatchSnapshot();
})

// locked
test('Matches locked gate snapshot', () => {
    const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;
    const tree = render(<Display className={lockedClass} />)
    expect(tree.baseElement).toMatchSnapshot(); 
})

test('unlocked and open default', () => {
    const defaultState = {
        closed: false,
        locked: false
    }

    const { getByText } = render(<Display closed={defaultState.closed} locked={defaultState.locked} />)

    expect(getByText(/unlocked/i)).toBeDefined();
    expect(getByText(/open/i)).toBeDefined();
})

test('displays if gate is open/closed and locked/unlocked', () => {
    const defaultState = {
        closed: true,
        locked: true
    }

    const { getByText } = render(<Display closed={defaultState.closed} locked={defaultState.locked} />)

    expect(getByText(defaultState.locked ? /locked/i : /unlocked/i)).toBeDefined();
    expect(getByText(defaultState.closed ? /closed/i : /open/i)).toBeDefined();
})
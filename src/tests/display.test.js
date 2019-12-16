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


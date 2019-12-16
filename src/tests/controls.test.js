import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from '../controls/Controls';


test('Matches snapshot, fireevent on button close gate', () => {
    const { getByText, baseElement } = render(<Controls />);
    const button = getByText(/Close Gate/i)
    fireEvent.click(button);
    expect(baseElement).toMatchSnapshot(); 
})

test('Matches snapshot, fireevent on button lock gate', () => {
    const { getByText, baseElement } = render(<Controls />);
    const button = getByText(/Lock Gate/i)
    fireEvent.click(button);
    expect(baseElement).toMatchSnapshot(); 
})

test('gate cannot be closed or opened when gate is locked', () => {
    const toggle = jest.fn();
    const { getByText, baseElement } = render(<Controls locked={true} closed={true} toggle={toggle} />)

    const openGate = getByText(/open gate/i)
    fireEvent.click(openGate);
    expect(toggle).not.toHaveBeenCalled();
    expect(baseElement).toMatchSnapshot();

})
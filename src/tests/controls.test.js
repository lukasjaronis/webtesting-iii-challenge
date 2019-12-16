import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Controls from '../controls/Controls';


test('Matches snapshot, fireevent on button close gate', () => {
    const { getByText } = render(<Controls />);
    const button = getByText(/Close Gate/i)
    fireEvent.click(button);
    expect(button.baseElement).toMatchSnapshot(); 
})

test('Matches snapshot, fireevent on button lock gate', () => {
    const { getByText } = render(<Controls />);
    const button = getByText(/Lock Gate/i)
    fireEvent.click(button);
    expect(button.baseElement).toMatchSnapshot(); 
})
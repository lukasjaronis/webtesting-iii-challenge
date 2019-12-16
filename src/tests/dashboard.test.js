import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../dashboard/Dashboard';

test('dashboard shows the controls and display', () => {
    const { getByText, baseElement } = render(<Dashboard />);
    getByText(/Unlocked/i);
    const display = getByText(/Open/i);
    getByText(/Lock Gate/i);
    const controls = getByText(/Close Gate/i);

    
    expect(display).toBeDefined();
    expect(controls).toBeDefined();
    expect(baseElement).toMatchSnapshot();

})
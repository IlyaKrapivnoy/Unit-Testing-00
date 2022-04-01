import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
    const { getByTestId } = render(
        <Button label={'a very important button'}></Button>
    );
    expect(getByTestId('button')).toHaveTextContent('a very important button');
});

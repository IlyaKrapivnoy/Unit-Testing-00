import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

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

it('renders button correctly 2', () => {
    const { getByTestId } = render(<Button label={'save'}></Button>);
    expect(getByTestId('button')).toHaveTextContent('save');
});

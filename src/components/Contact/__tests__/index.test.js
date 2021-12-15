import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<ContactForm />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<ContactForm />);

        expect(asFragment()).toMatchSnapshot();
    })
  })

  describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<ContactForm />);

        // Assert
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        expect(getByTestId('btn')).toHaveTextContent('Submit');
    });
})
/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
test('App should render', () => {
  render(<App />);

  expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
});

test('Button should render', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByRole('button', { name: /current theme: light/i });
  expect(themeButton).toBeInTheDocument();
});

/**
 * Verify clicking button should change theme
 * hint: use fireEvent.click(element) to trigger a click event on an element
 */
test('theme button should update button text', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByRole('button', {name: /current theme: light/i });
  fireEvent.click(themeButton)
   expect(screen.getByRole('button', { name: /current theme: dark/i })).toBeInTheDocument();
  fireEvent.click(themeButton);
   expect(screen.getByRole('button', { name: /current theme: light/i})).toBeInTheDocument();
});

// BONUS
// hint: there is a `.toHaveStyle` method.
// e.g.: expect(element).toHaveStyle('color: #FFF');
test('theme button should toggle styles', () => {
  // TODO: change the expect to actually test something 😉
  render(<App />);
  const themeButton = screen.getByRole('button', { name: /current theme: light/i });

  const initialColor = getComputedStyle(document.body).color;
  const initialBgColor = getComputedStyle(document.body).backgroundColor;

  fireEvent.click(themeButton);

  expect(document.body).toHaveStyle(`color: ${initialBgColor}`);
  expect(document.body).toHaveStyle(`background-color: ${initialColor}`);

  fireEvent.click(themeButton);

  expect(document.body).toHaveStyle(`color: ${initialColor}`);
  expect(document.body).toHaveStyle(`background-color: ${initialBgColor}`);
});

/**
 * Verify clicking button should toggle hidden content
 *
 * hint: you can check if something does not exist by using .not
 * e.g. expect(element).not.toBeInTheDocument()
 *
 * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
 * (getByText will throw an error if it is not rendered)
 */
test('hidden button should toggle hidden content', () => {
  // TODO: change the expect to actually test something 😉
  expect('no test written').toBe('tested');
});


/**
 * Want more? Try these:
 *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
 *   - check the for the class name .container on the surrounding div
 *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
 */

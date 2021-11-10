import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/React JS Unit Test By Jest, Enzyme/i);
  expect(linkElement).toBeInTheDocument();
});

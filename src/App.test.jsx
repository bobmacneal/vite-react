import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  // it('true to be true', () => {
  //   expect(true).toBe(true);
  // });
  //
  // it('false to be false', () => {
  //   expect(false).toBe(false);
  // });
  it('renders headline', () => {
    render(<App />);
    expect(screen.getByText('Bob TEST')).toBeInTheDocument()
    screen.debug();
    // check if App components renders headline
  });
});

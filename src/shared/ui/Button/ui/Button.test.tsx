import { Button, ButtonTheme } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('Check that button renders', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Check that theme appears', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});

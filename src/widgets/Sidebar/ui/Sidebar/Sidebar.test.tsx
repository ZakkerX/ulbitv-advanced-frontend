import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Check that sidebar renders', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Check toggle', () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

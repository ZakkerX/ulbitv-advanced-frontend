import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
          <ThemeSwitcher />
        </div>
      </Suspense>
    </div>
  );
};

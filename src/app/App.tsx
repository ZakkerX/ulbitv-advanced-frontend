import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
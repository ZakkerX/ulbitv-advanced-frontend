import { classNames } from 'shared/lib/classNames';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return <div className={classNames(css.navbar, {}, [className])}></div>;
};

import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import css from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  FILLED = 'filled',
  SHADOW = 'shadow',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...rest } = props;
  return (
    <button
      className={classNames(css.button, {}, [className, css[theme]])}
      {...rest}
    >
      {children}
    </button>
  );
};

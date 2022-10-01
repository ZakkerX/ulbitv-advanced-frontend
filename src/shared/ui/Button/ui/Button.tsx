import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import css from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  FILLED = 'filled',
  SHADOW = 'shadow',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  isSquare?: boolean;
  isRound?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, isSquare, isRound, size, ...rest } =
    props;

  const mods: Record<string, boolean> = {
    [css[theme]]: true,
    [css.square]: isSquare,
    [css.round]: isRound,
    [css[size]]: true,
  };

  return (
    <button className={classNames(css.button, mods, [className])} {...rest}>
      {children}
    </button>
  );
};

import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';
import css from './ThemeSwitcher.module.scss';
import { ButtonSize } from 'shared/ui/Button/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={theme === Theme.DARK ? ButtonTheme.FILLED : ButtonTheme.SHADOW}
      className={classNames(css.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
      isSquare={true}
      isRound={true}
      size={ButtonSize.XL}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

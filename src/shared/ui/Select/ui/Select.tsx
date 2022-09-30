import { SelectHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import css from './Select.module.scss';

export enum ThemeSelect {
  CLEAR = 'clear',
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Record<string, any>[];
  theme?: ThemeSelect;
}

export const Select: FC<SelectProps> = (props) => {
  const { className, options, theme, ...rest } = props;
  return (
    <select
      className={classNames(css.select, {}, [className, css[theme]])}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} {...option} />
      ))}
    </select>
  );
};

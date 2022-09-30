import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Select, ThemeSelect } from 'shared/ui/Select';
import css from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const options = [
  {
    value: 'en',
    children: 'EN',
  },
  {
    value: 'ru',
    children: 'RU',
  },
  {
    value: 'ro',
    children: 'RO',
  },
];

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState('en');

  const changeLocale = (e: ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Select
        onChange={changeLocale}
        defaultValue={language}
        className={classNames(css.langSwitcher, {}, [className])}
        theme={ThemeSelect.CLEAR}
        options={options}
      />
    </>
  );
};

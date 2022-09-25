import { BugButton } from 'app/providers/ErrorBoundary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import css from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(css.sidebar, { [css.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>{t('Toggle')}</button>
      <div className={css.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
        <BugButton />
      </div>
    </div>
  );
};

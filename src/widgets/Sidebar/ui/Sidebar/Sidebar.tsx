import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import css from './Sidebar.module.scss';
import MenuIcon from 'shared/assets/icons/open-menu.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid={'sidebar'}
      className={classNames(css.sidebar, { [css.collapsed]: collapsed }, [
        className,
      ])}
    >
      <div className={css.switchers}>
        <LangSwitcher />
        {/* <BugButton /> */}
        <Button
          data-testid={'sidebar-toggle'}
          theme={ThemeButton.CLEAR}
          className={css.toggle}
          onClick={onToggle}
        >
          <MenuIcon width={'24px'} />
        </Button>
      </div>
    </div>
  );
};

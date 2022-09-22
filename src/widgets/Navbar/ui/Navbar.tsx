import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import css from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation(['about', 'main']);
  return (
    <div className={classNames(css.navbar, {}, [className])}>
      <div className={css.links}>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
          {t('Home page', { ns: 'main' })}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t('About', { ns: 'about' })}
        </AppLink>
      </div>
    </div>
  );
};

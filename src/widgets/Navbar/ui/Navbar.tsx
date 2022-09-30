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
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">
          {t('Home page', { ns: 'main' })}
        </AppLink>
        <AppLink to="/about">{t('About', { ns: 'about' })}</AppLink>
      </div>
    </div>
  );
};

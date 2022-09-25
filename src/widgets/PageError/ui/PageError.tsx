import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import css from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(css.pageError, {}, [className])}>
      <p>{t('Something went wrong') + '.'}</p>
      <Button onClick={reloadPage}>{t('Reload')}</Button>
    </div>
  );
};

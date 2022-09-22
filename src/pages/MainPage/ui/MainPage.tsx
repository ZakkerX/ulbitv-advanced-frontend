import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('main');

  return <div>{t('Home page')}</div>;
};

// eslint-disable-next-line import/no-default-export
export default MainPage;

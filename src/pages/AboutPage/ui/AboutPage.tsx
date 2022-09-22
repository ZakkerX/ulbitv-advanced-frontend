import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <div>{t('About')}</div>;
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

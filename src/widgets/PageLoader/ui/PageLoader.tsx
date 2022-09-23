import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';
import css from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(css.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

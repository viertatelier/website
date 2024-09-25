import {Logo} from '@/components/logo-component';
import {FC} from 'react';
import styles from './loading.module.scss';

const Loading: FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};

export default Loading;

import React, { FC, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';

import { styles } from './styles';
import { useSelector } from 'react-redux';
import { isLoadingSelector } from '~/utils';
import CircularLoader from '~/components/Loader/CircularLoader';

export interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [t] = useTranslation();
  const classes = styles();

  const router = useRouter();
  const isLoading = useSelector(isLoadingSelector);
  console.log('isLoading', isLoading);

  return (
    <div className={classes.container}>
      {/* <header className={classes.header}>
      </header> */}
      <div className={classes.content}>
        <div className={classes.childs}>{children}</div>
      </div>
      <CircularLoader loading={isLoading} />
    </div>
  );
};

export default Layout;

import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import theme from '../styles/theme';
import Layout from './layouts';
import nextI18NextConfig from '../next-i18next.config.js';
import { store } from './redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);

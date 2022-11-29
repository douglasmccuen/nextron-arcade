import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureReduxStore } from '../store/configureStore'

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={configureReduxStore()}><Component {...pageProps} /></Provider>;
}

export default MyApp

import { AppProps } from 'next/app';

import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  // ts-ignore
  <Component {...pageProps} />
);

export default MyApp;

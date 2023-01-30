import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { ...pageProps } }: any) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';
import 'lightbox.js-react/dist/index.css';

import type { AppProps } from 'next/app';
import Layout from './layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

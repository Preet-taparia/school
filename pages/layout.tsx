import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import useWindowDimensions from '../hooks/useWindowDimensions';

interface ILayout {
  children: ReactNode;
}

export default function Layout({ children }: ILayout) {
  const { width } = useWindowDimensions();

  return (
    <>
      <Head>
        <title>The Shining Star School</title>
        <meta name="description" content="The Shining Star School" key="desc" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content={'The Shining Star School'}
          key={'og-title'}
        />
        <meta
          property="og:description"
          content="The Shining Star School"
          key={'og:description'}
        />
        <meta
          key={'og:image'}
          property="og:image"
          content="/assets/homepage/aboutUsMobile.svg"
        />
      </Head>
      {width && width < 1280 && <Navbar className={undefined} />}
      <>{children}</>
      <Footer />
    </>
  );
}

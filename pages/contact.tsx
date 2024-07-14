import dynamic from 'next/dynamic';
import { Fragment, useRef, useMemo } from 'react';
import ContactData from '../components/ContactData/ContactData';
import HeaderWithBubbles from '../components/HeaderWithBubbles/HeaderWithBubbles';
import ContactForm from '../components/Form/ContactForm';
import { PageHeader } from '../components/PageHeader/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/bgContactDesktop.jpg';
import BgMobile from '../public/assets/headers/bgContactMobile.jpg';

const Contact = () => {
  const { width } = useWindowDimensions();
  const ref = useRef<HTMLDivElement>(null);

  const Map = useMemo(
    () =>
      dynamic(() => import('../components/Map/Map'), {
        loading: () => <p>Loading Map...</p>,
        ssr: false,
      }),
    [],
  );

  const executeScroll = () => {
    if (ref?.current?.offsetTop) {
      window.scroll({
        top:
          ref?.current?.offsetTop -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Fragment>
      <PageHeader
        titleSpanColor="white"
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Get in Touch"
        titleSpan="with us"
        paragraph="If you have any questions, we encourage you to contact us or visit us personally at the facility."
        buttonTitle="Visit Us"
        onClick={() => executeScroll()}
      />
      <main ref={ref} className="px-5 py-8 pb-[50px] md:px-8 md:py-12 xl:px-[110px] xl:pb-[100px] 2xl:px-[180px]">
        <HeaderWithBubbles header='Visit Us' />
        <Map />
        <HeaderWithBubbles header='Contact Information' />
        <ContactData />
        <ContactForm />
      </main>
    </Fragment>
  );
};

export default Contact;

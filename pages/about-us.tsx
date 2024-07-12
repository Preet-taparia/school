import Image from 'next/image';
import { Fragment, useRef } from 'react';
import AboutUs_SocialMedia from '../components/AboutUs-SocialMedia/AboutUs-SocialMedia';
import { PageHeader } from '../components/PageHeader/PageHeader';
import TeachingStaff from '../components/TeachingStaff/TeachingStaff';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import useWindowDimensions from '../hooks/useWindowDimensions';
import PatternImg from '../public/assets/about/Pattern.svg';
import BgDesktop from '../public/assets/headers/bgAboutDesktop.jpg';
import BgMobile from '../public/assets/headers/bgAboutMobile.jpg';
import styles from '../styles/About.module.css';
const AboutUs = () => {
  const ref = useRef<any>(null);
  const { width } = useWindowDimensions();
  const executeScroll = () => {
    if (ref.current.offsetTop)
      window.scroll({
        top:
          ref.current.offsetTop -
          (width && width > 1280 ? 0 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Know More"
        titleSpanColor="white"
        titleSpan="About US!"
        paragraph="The Shining Star School is an institution with a rich baggage of experience."
        buttonTitle="Get to know more:)"
        onClick={executeScroll}
      />
      <main
        ref={ref}
        className="pb-[50px] px-5 md:px-8 md:mt-8 xl:px-[110px] xl:pb-[100px] 2xl:px-[180px] overflow-hidden"
      >
        <WhatWeOffer />
        <div className="w-screen relative min-h-[250px] -mx-5 md:-mx-8 md:mb-5 xl:mt-8 xl:mb-12 xl:mx-[-110px] 2xl:mx-[-180px]  ">
          <div className="absolute top-0 w-full h-full z-10 flex justify-center items-center">
            <p className="px-3 text-[25px] text-[#579CE2] font-bold text-center xl:text-[65px]">
              We invite you to our School
            </p>
          </div>

          <div className="absolute top-0 z-6 w-full h-full">
            <Image
              src={PatternImg}
              alt="tło"
              className={styles['pattern-image']}
            />
          </div>
        </div>
        <AboutUs_SocialMedia />
        <TeachingStaff />
      </main>
    </Fragment>
  );
};

export default AboutUs;

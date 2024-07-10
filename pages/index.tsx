import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Button from '../components/Button/Button';
import HomePageGallery from '../components/HomePageGallery/HomePageGallery';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import EllipsesLeft from '../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../public/assets/EllipsesRight.svg';
import BgDesktop from '../public/assets/headers/bgHomeDesktop.jpg';
import BgMobile from '../public/assets/headers/bgHomeMobile.jpg';
import AboutUsMobile from '../public/assets/homepage/aboutUsMobile.svg';
import styles from '../styles/HomePage.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="The Shining"
        titleSpan="Star School "
        paragraph="Create your future with us"
        buttonTitle="School Admission"
        onClick={() => router.push('/admission')}
        textContainerStyles={styles['text-container']}
      />
      <div className={styles['content-box-home']}>
        <div className={styles['about-us-container']}>
          <div className={styles['about-us-image']}>
            <Image
              className="w-full md:w-1/2 md:mx-auto xl:w-full"
              src={AboutUsMobile}
              alt="About Us"
            />
          </div>

          <div className={styles['about-us-text-container']}>
            <h4 className={styles['about-us-header-text']}>
              The Shining Star School
            </h4>
            <p className={styles['about-us-paragraph']}>
              The perfect school ... It&apos;s not just certificates and a high level of teaching.
              of teaching. This is not lacking in most educational institutions.
              After all, their role is to improve their own quality management
              systems and constantly increase the level of services offered.{" "}
              <span>
                We are a classy school, we are certified by the CBSE, our staff
                are real class teachers...
              </span>
            </p>
            <Button
              label="Know More About Us"
              onClick={() => router.push('/about-us')}
              textColor="text-white "
              className={styles['button-about-us']}
              buttonColor="bg-[#579CE2]"
            />
          </div>
        </div>
        <HomePageGallery />
      </div>
    </Fragment>
  );
}

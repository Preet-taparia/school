import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Button from '../components/Button/Button';
import HomePageGallery from '../components/HomePageGallery/HomePageGallery';
import { PageHeader } from '../components/PageHeader/PageHeader';
import BgDesktop from '../public/assets/headers/bgHomeDesktop.jpg';
import BgMobile from '../public/assets/headers/bgHomeMobile.jpg';
import AboutUsMobile from '../public/assets/homepage/aboutUsMobile.svg';
import styles from '../styles/HomePage.module.css';
import PopUp from "../components/PopUp/PopUp";
import RegisterForm from '../components/Form/RegisterForm';

export default function Home() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    handleOpenModal();
  }, []);
  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="The Shining"
        titleSpan="Star School "
        paragraph="We Aspire to Inspire"
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
            Unlock Your Child&apos;s Potential at The Shining Star School ! Join our nurturing and dynamic learning community where we inspire students to achieve their best academically, socially, and personally. With experienced teachers, state-of-the-art facilities, and a curriculum designed for success, The Shining Star School is the perfect place for your child&apos;s educational journey.
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
      <PopUp show={showModal} onClose={handleCloseModal}>
        <RegisterForm />
      </PopUp>
    </Fragment>
  );
}

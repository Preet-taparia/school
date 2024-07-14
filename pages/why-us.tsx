import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useRef } from 'react';
import Button from '../components/Button/Button';
import CalendarEvent from '../components/CalendarEvent/CalendarEvent';
import { PageHeader } from '../components/PageHeader/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import BgDesktop from '../public/assets/headers/bgOfferDesktop.jpg';
import BgMobile from '../public/assets/headers/bgOfferMobile.jpg';
import activityClubsMobile from '../public/assets/offer/activityClubsMobile.png';
import extracurricularActivitiesMobile from '../public/assets/offer/extracurricularActivitiesMobile.png';
import IconImg1 from '../public/assets/offer/icons/Icon1.svg';
import IconImg2 from '../public/assets/offer/icons/Icon2.svg';
import IconImg3 from '../public/assets/offer/icons/Icon3.svg';
import IconImg4 from '../public/assets/offer/icons/Icon4.svg';
import IconImg5 from '../public/assets/offer/icons/Icon5.svg';
import IconImg6 from '../public/assets/offer/icons/Icon6.svg';
import IconImg7 from '../public/assets/offer/icons/Icon7.svg';
import IconImg8 from '../public/assets/offer/icons/Icon8.svg';
import IconsDestkop from '../public/assets/offer/icons/iconsDesktop.svg';
import whatMakesUsStandOutMobile from '../public/assets/offer/whatMakesUsStandOutMobile.png';
import styles from '../styles/why-us.module.css';

const icons = [
  {
    name: 'Developing',
    url: IconImg1,
    color: 'bg-[#FF9D42]',
  },
  {
    name: 'Getting to know',
    url: IconImg2,
    color: 'bg-[#34689F]',
  },
  {
    name: 'Discovering',
    url: IconImg3,
    color: 'bg-[#C10210]',
  },
  {
    name: 'Experimenting',
    url: IconImg4,
    color: 'bg-[#529F47]',
  },
  {
    name: 'Searching',
    url: IconImg5,
    color: 'bg-[#E6255A]',
  },
  {
    name: 'Improving',
    url: IconImg6,
    color: 'bg-[#73122C]',
  },
  {
    name: 'Researching',
    url: IconImg7,
    color: 'bg-[#284B8F]',
  },
  {
    name: 'Achieving',
    url: IconImg8,
    color: 'bg-[#E50B1C]',
  },
];

const awards = [
  'Friendly atmosphere',
  'High level of security: monitoring, intercom, security',
  'English language and native speaker from class 1',
  'Second foreign language from class 3: Spanish or German',
  'Theatrical education',
  'Swimming pool',
  'Judo',
  'Sensory Integration Room',
  'Care from pedagogue, psychologist, speech therapist, rehabilitator',
  'White school - skiing trips',
  'Green school - always by the sea!',
  'Educational trips - learning by doing',
  'Cooperation with the cultural institution "City of Gardens" in Katowice',
  'Cooperation with the Department of Art Education of the Academy of Music in Katowice',
];

const extraCurricularActivities = [
  'Tennis, table tennis',
  'Aikido',
  'Chess',
  'Mathriders',
  'Piano',
  'Needlemania',
  'Robotics',
  'Dance school',
  'Summer sports camps',
  'Weekend trips',
];

const activityClubs = [
  'English, Spanish, German language',
  'Subject circles:',
  'Mathematical, Physical',
  'Chemical, Biological',
  'Polish, Historical',
  'Artistic, Musical',
  'Informational',
  'break',
  'Choir "Omega Voce"',
  'Geographic Tourist Circle',
  'SKS football',
  'Artistic gymnastics',
  'Corrective gymnastics, movement rehabilitation with medical recommendation',
  'CyberFun',
  'Young graphic designer academy',
  'EnglishFun',
  'Polish salon',
  'Board game masters club',
  'Creativity factory',
];

const Icon = ({
  name,
  icon,
  color,
}: {
  name: string;
  icon: any;
  color: string;
}) => {
  return (
    <div className={`${color} ${styles['circle-icon']}`}>
      <div className={styles['circle-icon-image-container']}>
        <Image
          src={icon}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <p className={styles['circle-icon-text']}>{name}</p>
    </div>
  );
};

const WhyUs = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const ref = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop -
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
        title="Why should you"
        titleSpan="Choose us?"
        paragraph="If you are wondering what place will be best for your child, we will gladly convince you that this is The Shining Star School."
        buttonTitle="Check Why"
        textContainerStyles={styles['page-header-text']}
        onClick={executeScroll}
      />
      <div
        ref={ref}
        className="pt-5xl:w-full xl:flex xl:px-[110px] xl:py-12 2xl:px-[200px] max-w-[1920px] mx-auto"
      >
        <div className={styles['gray-circle-container']}>
          <p className={styles['gray-circle-paragraph']}>
            Always adapted to <br className="hidden xs:block" /> the needs and
            talents of our students
          </p>
          <h2 className={styles['gray-circle-header']}>
            from over <span>10 Years</span>
          </h2>
          <p className={`${styles['gray-circle-paragraph']}`}>
            we cooperate, <br className="hidden " /> we work together,
            <br className="hidden xl:block" />
            we create together!
          </p>
        </div>
        <div className={styles['circle-icons-container']}>
          {width && width < 1280 ? (
            icons.map((icon) => (
              <Icon
                key={icon.name}
                color={icon.color}
                name={icon.name}
                icon={icon.url}
              />
            ))
          ) : (
            <Image
              className="w-full h-name"
              src={IconsDestkop}
              alt="Developing, Getting to know, Discovering, Experimenting, Searching, Improving, Researching, Achieving"
            />
          )}
        </div>
      </div>
      <div className={styles['section-container']}>
        <div className="xl:w-1/2">
          <h3 className={`mt-[-50px] ${styles['section-header']}`}>
            What makes us different?
          </h3>
          {awards.map((award, index) => (
            <p key={index} className={styles['section-item']}>
              {award}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <Image src={whatMakesUsStandOutMobile} alt="What sets us apart" />
        </div>
      </div>

      <div className={` flex-row-reverse  ${styles['section-container']}`}>
        <div className="xl:w-1/2">
          <h3 className={styles['section-header']}>
          Extracurricular activities offer in the tuition fee
          </h3>
          {activityClubs.map((activityClub: string, index) => (
            <p
              key={index}
              className={
                activityClub === 'Subject circles:'
                  ? styles['section-subheader']
                  : activityClub !== 'break'
                  ? styles['section-item']
                  : styles['section-break']
              }
            >
              {activityClub}
            </p>
          ))}
        </div>
        <div className={styles['section-images-container']}>
          <Image src={extracurricularActivitiesMobile} alt="What sets us apart" />
        </div>
      </div>

      <div className={styles['section-container']}>
        <div className="xl:w-1/2">
          <h3 className={styles['section-header']}>
          Additionally paid extracurricular activities offer
          </h3>

          {extraCurricularActivities.map((activity, index) => (
            <p key={index} className={styles['section-item']}>
              {activity}
            </p>
          ))}
        </div>
        <div
          className={` ${styles['section-images-container']} flex-col justify-center items-center`}
        >
          <Image src={activityClubsMobile} alt="What sets us apart" />
          <div className="mt-[50px] xl:mt-[50px] flex justify-center">
            <Button
              label="Admission"
              onClick={() => router.replace('/admission')}
              textColor="text-white"
              buttonColor="bg-[#FAC13C]"
            />
          </div>
        </div>
      </div>

      <div className="w-full mt-12 py-5 px-3 xs:px-7 xl:flex xl:flex-col xl:px-[110px] 2xl:px-[200px] max-w-[1600px] mx-auto xl:py-2">
        <div>
          <h5 className="text-center text-[#FAC13C] font-bold text-[30px]">
            Fees
          </h5>
          <CalendarEvent date="Registration fee, one-time payment" label="20,000 INR" />
        </div>

        <div className="mt-10 pb-[50px] xl:pb-[100px]">
          <h5 className="text-center text-[#FAC13C] font-bold text-[30px]">
          Tuition
          </h5>
          <CalendarEvent date="Annual Fee" label="30,000 INR" />
          <div className="w-full xl:flex xl:justify-between">
            <CalendarEvent
              fullWidth
              date="10 installments"
              label="12,500 INR / month"
            />
            <CalendarEvent
              fullWidth
              date="12 installments"
              label="10,000 / month"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhyUs;

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import Button from '../components/Button/Button';
import HomePageGallery from '../components/HomePageGallery/HomePageGallery';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import {ArticlePreviewBox} from '../components/ArticlePreviewBox/ArticlePreviewBox';
import EllipsesLeft from '../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../public/assets/EllipsesRight.svg';
import BgDesktop from '../public/assets/headers/bgHomeDesktop.jpg';
import BgMobile from '../public/assets/headers/bgHomeMobile.jpg';
import AboutUsMobile from '../public/assets/homepage/aboutUsMobile.svg';
import styles from '../styles/HomePage.module.css';
import { articles } from '../lib/articleData';

export default function Home() {
  const router = useRouter();
  const [howManyArticlesLoaded, setHowManyArticlesLoaded] = useState(3);

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
        <div className={styles['header2-container']}>
          <div className={styles['ellipses-left']}>
            <Image src={EllipsesLeft} alt="EllipsesLeft" />
          </div>
          <div className={styles['ellipses-right']}>
            <Image src={EllipsesRight} alt="EllipsesRight" />
          </div>
          <h2 className={styles.header2}>
             Our, <br className="md:hidden" /> latest news
          </h2>
        </div>
        {articles.slice(0, howManyArticlesLoaded).map(article => (
          <ArticlePreviewBox
            key={article.id}
            id={article.id}
            title={article.title}
            content={article.content}
            createdAt={article.createdAt}
          />
        ))}
        {howManyArticlesLoaded < articles.length && (
          <div className="w-full flex justify-center my-7 px-3 pb-[50px] max-w-[1920px] xl:pb-[100px] md:px-8 xl:px-[110px] 2xl:px-[200px]">
            <Button
              dataCypress="show-more-articles"
              label="Read more articles"
              onClick={() => setHowManyArticlesLoaded(prev => prev + 3)}
              textColor="text-white"
              buttonColor="bg-[#FAC13C]"
            />
          </div>
        )}

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

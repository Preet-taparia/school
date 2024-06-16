import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';
import { ArticlePreviewBox } from '../components/ArticlePreviewBox/ArticlePreviewBox';
import Button from '../components/Button/Button';
import { PageHeader } from '../components/PageHeader.tsx/PageHeader';
import useWindowDimensions from '../hooks/useWindowDimensions';
import EllipsesLeft from '../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../public/assets/EllipsesRight.svg';
import BgDesktop from '../public/assets/headers/bgNewsDesktop.jpg';
import BgMobile from '../public/assets/headers/bgNewsMobile.jpg';
import styles from '../styles/HomePage.module.css';
import {articles} from '../lib/articleData';

const Article = () => {
  const [howManyArticlesLoaded, setHowManyArticlesLoaded] = useState(5);
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const executeScroll = () => {
    if (ref?.current?.offsetTop)
      window.scroll({
        top:
          ref?.current?.offsetTop -
          (width && width > 1280 ? 20 : width && (width < 768 ? 60 : 100))!,
        left: 0,
        behavior: 'smooth',
      });
  };

  return (
    <Fragment>
      <PageHeader
        bgUrl={BgMobile}
        bgXlUrl={BgDesktop}
        title="Read,"
        titleSpan="what's up with us"
        paragraph="Know all the articles which have been published!!"
        buttonTitle="Our Articles"
        onClick={() => executeScroll()}
      />
      <div ref={ref} className={styles['content-box-news']}>
        <div className={styles['header2-container']}>
          <div className={styles['ellipses-left']}>
            <Image src={EllipsesLeft} alt="EllipsesLeft" />
          </div>
          <div className={styles['ellipses-right']}>
            <Image src={EllipsesRight} alt="EllipsesRight" />
          </div>
          <h2 className={styles.header2}>
            Read <br className="md:hidden" /> published articles
          </h2>
        </div>
      </div>

      {articles.map((article, index) => {
        if (index >= howManyArticlesLoaded) return null;
        return (
          <ArticlePreviewBox
            key={article.id}
            id={article.id}
            title={article.title}
            content={article.content}
            createdAt={article.createdAt}
          />
        );
      })}
      {howManyArticlesLoaded < articles.length && (
        <div className="w-full flex justify-center my-7 px-3 pb-[50px] max-w-[1920px] xl:pb-[100px] md:px-8 xl:px-[110px] 2xl:px-[200px]">
          <Button
            dataCypress="show-more-articles"
            label="Read more articles"
            onClick={() => setHowManyArticlesLoaded(prev => prev + 5)}
            textColor="text-white"
            buttonColor="bg-[#FAC13C]"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Article;

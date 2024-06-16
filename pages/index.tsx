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

export default function Home({ posts }: { posts: any }) {
  const router = useRouter();

  return (
    <Fragment>
      {/* <div
        data-cypress="recruitment-modal"
        className="hidden xl:flex fixed bottom-0 w-full h-[80px] bg-white z-[90] items-center justify-center 2xl:h-[100px]"
      >
        <Link
          href="/admission"
          className="text-center text-[#579CE2] text-[20px] underline font-[700]"
        >
          Rekrutacja na rok 2023 trwa, zapisz swoje dziecko już dziś!
        </Link>
        <Button
          label="Wypełnij formularz"
          buttonColor="bg-[#579CE2]"
          textColor="text-[white]"
          className={styles['button-modal-recrutation']}
          onClick={() => router.push('/admission')}
        />
      </div> */}
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
            See, <br className="md:hidden" /> what is happening with us
          </h2>
        </div>
        {/* {posts
          .filter((post: any) => post.fields.pinned === true)
          .map((post: any) => {
            return (
              <ArticlePreviewBox
                shortDescription={post.fields.shortDescription}
                key={post.sys.id}
                id={post.sys.id}
                title={post.fields.title}
                content={post.fields.content}
                createdAt={post.sys.createdAt}
                imageSrc={'https:' + post.fields.mainImage.fields.file.url}
              />
            );
          })}
        {posts
          ?.filter((post: any) => post.fields.pinned === false)
          .map((post: any, index: number) => {
            if (1 < index) return null;
            return (
              <ArticlePreviewBox
                shortDescription={post.fields.shortDescription}
                key={post.sys.id}
                id={post.sys.id}
                title={post.fields.title}
                content={post.fields.content}
                createdAt={post.sys.createdAt}
                imageSrc={'https:' + post.fields.mainImage.fields.file.url}
              />
            );
          })} */}
        <Button
          label="See all Events"
          onClick={() => router.push('/events')}
          textColor="text-white"
          className={styles['button-all-posts']}
          buttonColor="bg-[#FAC13C]"
        />
        <div className={styles['about-us-container']}>
          <div className={styles['about-us-image']}>
            <Image
              className="w-full md:w-1/2 md:mx-auto xl:w-full"
              src={AboutUsMobile}
              alt="O nas"
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
              systems and constantly increase the level of services offered.
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

// export async function getStaticProps() {
//   const client = createClient({
//     space: process.env.SANITY_SPACE,
//     environment: process.env.SANITY_ENVIRONMENT, // defaults toprocess.env.SANITY_ENVIRONMENT if not set
//     accessToken: process.env.SANITY_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: 'post' });

//   return {
//     props: {
//       posts: res.items,
//     },
//   };
// }

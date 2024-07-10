import { SlideshowLightbox } from 'lightbox.js-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './HomePageGallery.module.css';
import EllipsesLeft from '../../public/assets/EllipsesLeft.svg';
import EllipsesRight from '../../public/assets/EllipsesRight.svg';
import galleryImg1 from '../../public/assets/homepage/gallery/galleryImg1.jpg';
import galleryImg2 from '../../public/assets/homepage/gallery/galleryImg2.jpg';
import galleryImg3 from '../../public/assets/homepage/gallery/galleryImg3.jpg';
import galleryImg4 from '../../public/assets/homepage/gallery/galleryImg4.jpg';

const images = [
  { src: galleryImg1, alt: 'galleryImg1' },
  { src: galleryImg2, alt: 'galleryImg2' },
  { src: galleryImg3, alt: 'galleryImg3' },
  { src: galleryImg4, alt: 'galleryImg4' },
];

const HomePageGallery = () => {
  const router = useRouter();
  return (
    <div className={styles['gallery-container']}>
      <div className={styles['header2-container']}>
        <div className={styles['ellipses-left']}>
          <Image src={EllipsesLeft} alt="EllipsesLeft" />
        </div>
        <div className={styles['ellipses-right']}>
          <Image src={EllipsesRight} alt="EllipsesRight" />
        </div>
        <h2 className={styles.header2}>Gallery</h2>
      </div>

      <SlideshowLightbox
        lightboxIdentifier="lightbox2"
        framework="next"
        images={images}
        fullScreen
      >
        <div className="pb-3 min-w-screen flex overflow-x-scroll mt-5 xl:overflow-x-hidden">
          {images &&
            images.map((image: any, index: number) => (
              <div
                data-cypress="gallery-image"
                key={index}
                className={styles['gallery-image']}
              >
                <Image
                  className="rounded-[25px] min-w-[150px] max-w-[200px] xl:min-w-[190px] xl:max-w-[190px] 2xl:min-w-[205px] 2xl:max-w-[205px] 3xl:min-w-[265px] 2xl:max-w-[265px]"
                  src={image.src}
                  alt="Gallery Photo Number 1"
                  data-lightboxjs="lightbox2"
                />
              </div>
            ))}
          <div
            onClick={() => router.push('/gallery')}
            className={styles['gallery-show-all-images']}
          >
            See More Photos
          </div>
        </div>
      </SlideshowLightbox>
    </div>
  );
};

export default HomePageGallery;
